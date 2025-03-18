import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

function CalculatorPage() {
    const [formdata, setFormdata] = useState({ amount: "", primary: "inr", secondary: "usd" })
    const [convertedamount, setConvertedamount] = useState(null)

    const exchangerate = {
        inr: { usd: 0.012, eur: 0.011, gbp: 0.0095, cad: 0.016 },
        usd: { inr: 83.0, eur: 0.92, gbp: 0.78, cad: 1.34 },
        eur: { inr: 90.0, usd: 1.09, gbp: 0.85, cad: 1.46 },
        gbp: { inr: 105.0, usd: 1.28, eur: 1.18, cad: 1.72 },
        cad: { inr: 61.0, usd: 0.75, eur: 0.68, gbp: 0.58 },
    }

    function handlechange(e) {
        const { name, value } = e.target
        setFormdata((prev) => ({ ...prev, [name]: value }))
    }

    function handlesubmit(e) {
        e.preventDefault()
        const { amount, primary, secondary } = formdata

        if (!amount || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount!")
            return
        }

        if (primary === secondary) {
            setConvertedamount(amount)
        } 
        else {
            const rate = exchangerate[primary]?.[secondary]
            if (rate) {
                setConvertedamount((amount * rate).toFixed(2))
            } else {
                setConvertedamount("Conversion rate unavailable")
            }
        }
    }

    return (
        <>
            <Header pageactive={{ active: "calculator" }} />
            <hr style={{ marginTop: "20px", color: "#b8b8b8" }} />
            <div className="cal-container">
                <div className="cur-converted">
                    <form onSubmit={handlesubmit}>
                        <div className="currency">
                            <div className="cur-amt">
                                <label className="cur-label">Amount</label>
                                <div className="cur-input-box">
                                    <span className="currency-symbol">₹</span>
                                    <input
                                        type="text"
                                        placeholder="0"
                                        name="amount"
                                        value={formdata.amount}
                                        onChange={handlechange}
                                    />
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
