import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const portfolio = [
    {
        "id":1,
        "companyname":"TATA",
        "mprice":"₹500",
        "return":"₹100",
        "cprice":"₹600"
    },
    {
        "id":2,
        "companyname":"TATA",
        "mprice":"₹500",
        "return":"₹100",
        "cprice":"₹600"
    },
    {
        "id":3,
        "companyname":"TATA",
        "mprice":"₹500",
        "return":"₹100",
        "cprice":"₹600"
    },
    {
        "id":4,
        "companyname":"TATA",
        "mprice":"₹500",
        "return":"₹100",
        "cprice":"₹600"
    },
    {
        "id":5,
        "companyname":"TATA",
        "mprice":"₹500",
        "return":"₹100",
        "cprice":"₹600"
    }
]
function Dashboard(){
    const [count, setCount] = useState(0)
    const [select, setSelect] =useState(false)
    const [selectstock, setSelectstock] = useState(null)
    const [cardselect, setCardselect] = useState("buy")
    return(
        <>
            <div><Header
                pageactive ={{active:"dashboard"}}
                />
            </div>
            <hr style={{marginTop:"30px",color:"#b8b8b8"}}/>
            <div className='db-container'>
                <div className="db-left">
                    <div className="db-heading">Holdings ({count})</div>
                    <div className="port-amt">
                        <div style={{margin:"25px 10px"}}>
                            <div className="c-value">
                                <div className="current-amt"> ₹50,498.03</div>
                                <div style={{position:"relative",top:"10px",fontSize:"14px",fontWeight:"435"}}>Current Value</div>
                            </div>
                        </div>
                        <div style={{margin:"25px 10px"}}>
                            <div className="d-value">
                                <div style={{display:"flex",marginLeft:"100px",gap:"50px"}}>
                                    <div>
                                        <div className='db-content'>Invested Value </div>
                                        <div className='db-content'>Total Returns </div>
                                        <div className='db-content'>1D Returns </div>
                                    </div>
                                    <div>
                                        <div className='db-content'>₹4000</div>
                                        <div className='db-content'><span style={{color:"#00B386"}}>+₹1000(40%)</span></div>
                                        <div className='db-content'><span style={{color:"#EB5B3C"}}>-₹50(0.10%)</span></div>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <table className='db-table'>
                        <thead className='db-head'>
                            <tr className='db-row'>
                                <th className='db-th'>Company</th>
                                <th className='db-th'>Market Price</th>
                                <th className='db-th'>Returns</th>
                                <th className='db-th'>Current Price</th>
                            </tr>
                        </thead>
                        <tbody className='db-body'>
                            {portfolio?.map((item) => (
                                <tr key={item.id} className='db-row'>
                                    <td className='db-data'>{item.companyname}</td>
                                    <td className='db-data'>{item.mprice}</td>
                                    <td className='db-data'>{item.return}</td>
                                    <td className='db-data'>{item.cprice} <button  onClick={() => {setSelectstock(item.id)}}><IoIosAddCircleOutline className='dash-icon' style={{marginLeft:"90px",width:"18px",height:"18px"}}/></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="db-right">
                    {!select ? (
                        <>
                            <div className="db-card">
                                {portfolio?.map((item) => (
                                    selectstock === item.id && (
                                        <div>
                                            <div className='card-title'>{item.companyname}</div>
                                            <hr />
                                            <div className='card-bit'>
                                                <div><button 
                                                style={{color : `${cardselect === "buy" ? "teal" : "#000"}`,
                                                textDecoration : `${cardselect === "buy" ? "underline" : "none"}`,
                                                fontSize : `${cardselect === "buy" ? "15px" : null}`,
                                                textUnderlineOffset : `${cardselect === "buy" ? "8px" : null}`}} 
                                                onClick={() => {setCardselect("buy")}}>BUY</button></div>
                                                <div><button 
                                                style={{color : `${cardselect === "sell" ? "teal" : "#000"}`,
                                                textDecoration : `${cardselect === "sell" ? "underline" : "none"}`,
                                                fontSize : `${cardselect === "sell" ? "15px" : null}`,
                                                textUnderlineOffset : `${cardselect === "sell" ? "8px" : null}`}} 
                                                onClick={() => {setCardselect("sell")}}>SELL</button></div>
                                            </div>
                                            <hr />
                                            <div className="trade-day">
                                                <div>Delivery</div>
                                                <div>Intraday</div>
                                                <div>MTF</div>
                                                <div style={{border:"none"}}><IoSettings style={{width:"18px",height:"18px"}}/></div>
                                            </div>
                                            <div className='buying'>
                                                <div>
                                                    <div style={{marginBottom:"20px"}}>Qty <span style={{fontWeight:"535"}}>NSE</span> <IoIosArrowDown style={{marginLeft:"2px",position:"relative",top:"3px"}}/></div>
                                                    <div>Price <span style={{fontWeight:"535"}}>Market</span> <IoIosArrowDown style={{marginLeft:"2px",position:"relative",top:"3px"}}/></div>
                                                </div>
                                                <div>
                                                    <div style={{border:"1px solid #000",width:"100px",height:"25px",marginBottom:"20px"}}></div>
                                                    <div style={{border:"1px solid #000",width:"100px",height:"25px", fontWeight:"535",fontSize:"x-small"}}></div>
                                                </div>
                                            </div>
                                            <div className='card-text'>Order wil be executed at the best price in market</div>
                                            <hr style={{marginTop:"100px"}}/>
                                            <div className="buy-btn">
                                                <button style={{backgroundColor : `${cardselect === "buy" ? "#00B386" : "#E20606"}`}}>{cardselect === "buy" ? "BUY" : "SELL"}</button>
                                            </div>
                                        </div>   
                                    )
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div>
            <div style={{marginTop:"100px"}}><Footer/></div>
        </>
    )
}
export default Dashboard