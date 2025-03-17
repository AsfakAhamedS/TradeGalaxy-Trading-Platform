import React, { useState,useEffect } from 'react'
import axios from "axios";
import Header from './Header'

const url = "http://localhost:4500/"

function WalletPage(){
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("Token"))
    const [useremail,setUseremail] = useState(localStorage.getItem('email'))
    const [activeTab, setActiveTab] = useState("add")
    const [amount, setAmount] = useState("")
    const [walletBalance, setWalletBalance] = useState(0)
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        fetchWalletBalance()
    }, [])
    function fetchWalletBalance(){
        axios.get(url+"wallet/balance",{token:isLoggedIn, email:useremail})
            .then(res => {
                setWalletBalance(res.data.balance)
                console.log(walletBalance)
            })
            .catch(e =>  {
                console.error("Error fetching balance:", e)
                localStorage.removeItem('Token')
                navigate('/')
            })
    }
    function handleAmountChange(e){
        const value = e.target.value.replace(/[^0-9]/g, "")
        setAmount(value)
    }
    const handleWallet = async (e) => {
        e.preventDefault()
        const amt = Number(amount)
        if (amt <= 0) {
            alert("Please enter a valid amount!")
            return
        }
        const path = activeTab === "add" ? "wallet/add" : "wallet/withdraw"

        axios.post(url+path, {token:isLoggedIn, amount: amt, email:useremail})
            .then(res => {
                alert(res.data.message)
                setWalletBalance(res.data.balance)
                setTransactions((prev) => [
                    ...prev,{ type: activeTab === "add" ? "Added" : "Withdrawn", amount: amt, date: new Date().toLocaleDateString() },
                ])
                setAmount("")
            })
            .catch(e =>{
                alert(e.response?.data?.message || "Something went wrong")
                localStorage.removeItem('Token')
                navigate('/')
            })
    }
    const addAmount = (value) => {
        setAmount((prev) => String(Number(prev) + value))
    }

    return (
        <div>
            <Header pageactive={{ active: "wallet" }} />
            <div className="wallet-head">
                <div>INR Balance</div>
            </div>
            <hr style={{ marginTop: "10px", color: "#b8b8b8" }} />
            <div className="wallet-container">
                <div className="wallet-box">
                    <div className="wallet-tabs">
                        <button className={activeTab === "add" ? "active" : ""} onClick={() => setActiveTab("add")}>Add money</button>
                        <button className={activeTab === "withdraw" ? "active" : ""} onClick={() => setActiveTab("withdraw")}>Withdraw</button>
                    </div>
                    <div className="wallet-content">
                        <form className="wallet_form" onSubmit={handleWallet}>
                            <label className="wallet-label">Enter Amount</label>
                            <div className="wallet-input-box">
                                <span className="currency-symbol">₹</span>
                                <input type="text" value={amount} onChange={handleAmountChange} placeholder="0" />
                            </div>
                            <div className="quick-buttons">
                                <button type="button" onClick={() => addAmount(100)}>+ ₹100</button>
                                <button type="button" onClick={() => addAmount(500)}>+ ₹500</button>
                            </div>
                            <button type="submit" className="add-money-btn">
                                {activeTab === "add" ? "Add Money" : "Withdraw Money"}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="transaction-section">
                    <div className="d_amt">
                        <div className="wallet-balance"><span>Wallet Balance </span></div>
                        <div>₹{walletBalance}</div>
                    </div>
                    <hr style={{ marginTop: "10px", color: "#b8b8b8" }} />
                    <div style={{ marginTop: "20px" }}>
                        <h3>Transaction History</h3>
                        <ul className="transaction-list">
                            {transactions.length === 0 ? (
                                <p>No transactions yet.</p>
                            ) : (
                                transactions.map((txn, index) => (
                                    <li key={index} className={txn.type === "Added" ? "green" : "red"}>
                                        {txn.type}: ₹{txn.amount} <span style={{ fontSize: "small" }}>({txn.date})</span>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WalletPage