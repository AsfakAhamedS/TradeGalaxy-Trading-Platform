import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

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
    return(
        <>
            <div><Header/></div>
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
                                    <td className='db-data'>{item.cprice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="db-right">
                    {!select ? (
                        <>
                            <div className="db-card">

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