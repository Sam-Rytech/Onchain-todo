import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import TaskItem from '../components/TaskItem'
import contractData from '../lib/TodoList.json'

export default function Home() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    const [account, setAccount] = useState('')

    const contractAddress = '0x85Ca267e9e6eFFC274F4D29665DaA0926f9aC8b6'
}