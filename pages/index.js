import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import TaskItem from '../frontend/components/TaskItem'
import contractData from '../lib/TodoList.json'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')
  const [account, setAccount] = useState('')

  const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS' // Replace after Remix deployment

  useEffect(() => {
    loadTasks()
  }, [])

  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setAccount(accounts[0])
    }
  }

  async function loadTasks() {
    if (!window.ethereum) return
    const provider = new ethers.BrowserProvider(window.ethereum)
    const contract = new ethers.Contract(
      contractAddress,
      contractData.abi,
      provider
    )

    let loadedTasks = []
    const taskCount = await contract.taskCount()
    for (let i = 1; i <= taskCount; i++) {
      const task = await contract.getTask(i)
      loadedTasks.push({
        id: task[0],
        content: task[1],
        completed: task[2],
      })
    }
    setTasks(loadedTasks)
  }

  async function addTask() {
    if (!input) return
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(
      contractAddress,
      contractData.abi,
      signer
    )
    const tx = await contract.createTask(input)
    await tx.wait()
    setInput('')
    loadTasks()
  }

  async function toggleTask(id) {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(
      contractAddress,
      contractData.abi,
      signer
    )
    const tx = await contract.toggleTask(id)
    await tx.wait()
    loadTasks()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Onchain Todo List</h1>
      {account ? (
        <>
          <div className="flex mb-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 text-black"
              placeholder="New task..."
            />
            <button
              onClick={addTask}
              className="bg-blue-500 px-4 py-2 ml-2 rounded"
            >
              Add
            </button>
          </div>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={() => toggleTask(task.id)}
            />
          ))}
        </>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}
