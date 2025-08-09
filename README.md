# Onchain TodoList ✅

A **Web3-inspired TodoList dApp** built with Solidity smart contracts and a modern Next.js + Tailwind CSS frontend.  
Users can **add tasks, mark them complete, and view them** — all stored **on-chain** for transparency and decentralization.

---

## 📂 Folder Structure

onchain-todo/
├─ contracts/
│ └─ TodoList.sol # Solidity smart contract
├─ frontend/
│ ├─ package.json # Frontend dependencies
│ ├─ next.config.js # Next.js configuration
│ ├─ tailwind.config.js # Tailwind CSS configuration
│ ├─ postcss.config.js # PostCSS configuration
│ ├─ pages/
│ │ ├─ _app.js # Global app setup
│ │ └─ index.js # Main TodoList UI
│ ├─ components/
│ │ └─ TaskItem.js # Task display component
│ ├─ public/
│ │ └─ favicon.ico
│ └─ lib/
│ └─ TodoList.json # Contract ABI
├─ .env.example # Example environment variables
└─ README.md


---

## 🚀 Features

- **On-chain storage** for tasks  
- **Add, complete, and fetch tasks** directly from the blockchain  
- **Wallet connection** using MetaMask  
- **Modern UI** with Tailwind CSS  
- **Ethers.js** for Web3 interactions  

---

## 🛠️ Prerequisites

Before starting, make sure you have:

- **Node.js** >= 16.x installed  
- **MetaMask** browser extension  
- **Remix IDE** (https://remix.ethereum.org)  
- **Base Sepolia / Sepolia ETH testnet funds** for testing  

---

## 📜 Smart Contract Deployment (Remix)

1. Open [Remix IDE](https://remix.ethereum.org)  
2. Create a file in `contracts/TodoList.sol` and paste your smart contract code.  
3. Compile the contract with Solidity version `0.8.x`.  
4. Connect Remix to **MetaMask** and select **Base Sepolia / Sepolia Testnet**.  
5. Deploy the contract.  
6. Copy the deployed **contract address**.  
7. Export the contract ABI from Remix and save it in `frontend/lib/TodoList.json`.  

---

## 💻 Frontend Setup

1. Navigate to the frontend folder:
   ```sh
   cd frontend
   npm install
