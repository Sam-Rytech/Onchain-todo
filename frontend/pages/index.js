import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import TaskItem from '../components/TaskItem'
import contractData from '../lib/TodoList.json'

export default function Home() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    const [account, setAccount] = useState('')

    const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS'
}