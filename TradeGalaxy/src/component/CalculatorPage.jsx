import React, { useState } from "react"
import axios from "axios";
import Header from "./Header"
import Footer from "./Footer"

const url = "http://localhost:4500/"

function CalculatorPage() {
    const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem('Token'))
    const [formdata, setFormdata] = useState({ amount: "", primary: "inr", secondary: "usd" })
    const [convertedamount, setConvertedamount] = useState(null)

    function handlechange(e) {
        const { name, value } = e.target
        setFormdata((prev) => ({ ...prev, [name]: value }))
    }

    function handlesubmit(e) {
        e.preventDefault()
        axios.post(url+"currencyconvert", { token:isLoggedIn,amount:formdata.amount, primary:formdata.primary, secondary:formdata.secondary})
          .then(res => {
            if(res.status==200){
                setConvertedamount(res.data.toFixed(4))
            }})
          .catch(e => {
            console.log(e.response.data)
            alert(e.response.data)
          }) 
    }

    return (
        <>
            <Header 
                pageactive={{ active: "calculator" }} 
            />
            <hr style={{ marginTop: "20px", color: "#b8b8b8" }} />
            <div className="cur-heading">Currency Converted</div>
            <div className="cal-container">
                <div className="cur-converted">
                    <form onSubmit={handlesubmit}>
                        <div className="currency">
                            <div className="cur-amt">
                                <label className="cur-label">Amount</label>
                                <div className="cur-input-box">
                                    <span className="currency-symbol">₹</span>
                                    <input type="text" placeholder="0" name="amount" value={formdata.amount} onChange={handlechange}/>
                                </div>
                            </div>
                            <div className="cur-from">
                                <label className="cur-label">From</label>
                                <div>
                                    <select name="primary" onChange={handlechange} value={formdata.primary}>
                                        <option value="inr">INR - Indian Rupee</option>
                                        <option value="usd">USD - US Dollar</option>
                                        <option value="eur">EUR - Euro</option>
                                        <option value="gbp">GBP - British Pound</option>
                                        <option value="cad">CAD - Canadian Dollar</option>
                                    </select>
                                </div>
                            </div>
                            <div className="cur-to">
                                <label className="cur-label">To</label>
                               <div>
                                <select name="secondary" onChange={handlechange} value={formdata.secondary}>
                                        <option value="usd">USD - US Dollar</option>
                                        <option value="inr">INR - Indian Rupee</option>
                                        <option value="eur">EUR - Euro</option>
                                        <option value="gbp">GBP - British Pound</option>
                                        <option value="cad">CAD - Canadian Dollar</option>
                                    </select>
                               </div>
                            </div>
                        </div>
                        <div className="cur-con-btn" style={{ textAlign: "center" }}>
                            <button type="submit">Convert</button>
                        </div>
                    </form>
                    <div className="cur">
                        {convertedamount !== null && (
                            <h2>
                                Converted Amount: {convertedamount} {formdata.secondary.toUpperCase()}
                            </h2>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CalculatorPage;
