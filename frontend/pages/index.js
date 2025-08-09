import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import TaskItem from '../components/TaskItem'
import contractData from '../lib/TodoList.json'

export default function Home() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    const [account, setAccount] = useState('')

    const contractAddress = '0x85Ca267e9e6eFFC274F4D29665DaA0926f9aC8b6'

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
}