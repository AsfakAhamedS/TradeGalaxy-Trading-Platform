import React, { useState,useEffect } from 'react'
import axios from "axios";
import Header from './Header'
import Footer from './Footer'
import { MdOutlineCancel } from "react-icons/md"
import { IoIosAddCircleOutline } from "react-icons/io"
import { IoSettings } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"


const url = "http://localhost:4500/"

const cart = [
    {
        "id":1,
        "image":"../../public/stocksicon/AdaniEnterp.webp",
        "name":"Groww Nifty Total Market Index Fund Direct Growth",
        "percentage":"1.10 (0.25%)"
    },
    {
        "id":2,
        "image":"../../public/stocksicon/AdaniEnterp.webp",
        "name":"Groww Nift ",
        "percentage":"1.10 (0.25%)"
    },
    {
        "id":3,
        "image":"../../public/stocksicon/AdaniEnterp.webp",
        "name":"Groww Nifty50",
        "percentage":"1.10 (0.25%)"
    },
    {
        "id":4,
        "image":"../../public/stocksicon/AdaniEnterp.webp",
        "name":"Groww Midcap",
        "percentage":"1.10 (0.25%)"
    },
    {
        "id":5,
        "image":"../../public/stocksicon/AdaniEnterp.webp",
        "name":"Groww Sensex",
        "percentage":"1.10 (0.25%)"
    },
]

function CartPage(){
    const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem('Token'))
    const [select, setSelect] =useState(false)
    const [selectstock, setSelectstock] = useState(null)
    
    
    return(
        <>
            <div>
                <Header 
                    pageactive ={{active:"profile"}}
                />
            </div>
            <hr style={{marginTop:"20px",color:"#b8b8b8"}}/>
            <div className="cart_container">
                <div className="cart_left">
                    <div className='cart_heading'>My Cart</div>
                    {cart?.map((item) => (
                        <div className="cart_item" key={item}>
                            <div className="cart_top" onClick={() => {setSelectstock(item.id)}}>
                                <div className='cart_img'><img src="../../public/stocksicon/AdaniEnterp.webp" alt="" /><span></span> <span className='cart_content'>{item.name}</span></div>
                                <div className="cart_icon"><MdOutlineCancel style={{width:"20px",height:"20px"}}/></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart_right">
                    {!select ? (
                        <>
                                {cart?.map((item) => (
                                    selectstock === item.id && (
                                        <div>
                                            <div className='card-title'>{item.name}</div>
                                            <div className='card-sub_title'>NSE <span>{item.percentage}</span> BSE <span>{item.percentage}</span></div>
                                            <hr />
                                            <div className='card-bit'>
                                                <div><button 
                                                style={{color : "teal",textDecoration : "underline",fontSize : "15px",textUnderlineOffset : "8px"}} onClick={() => {setCardselect("buy")}}>BUY</button></div>
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
                                                <button style={{backgroundColor :"#00B386"}}>BUY</button>
                                            </div>
                                        </div>   
                                    )
                                ))}
                          
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div>
            <div style={{marginTop:"100px"}}>
                <Footer/>
            </div>
            
        </>
    )
}
export default CartPage