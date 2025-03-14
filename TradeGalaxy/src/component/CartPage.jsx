import React, { useState,useEffect } from 'react'
import axios from "axios";
import Header from './Header'
import Footer from './Footer'
import { MdOutlineCancel } from "react-icons/md";


const url = "http://localhost:4500/"

function CartPage(){
    const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem('Token'))
    
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
                    <div className="cart_item">
                        <div className="cart_top">
                            <div className='cart_img'><img src="../../public/stocksicon/AdaniEnterp.webp" alt="" /><span></span> <span className='cart_content'>Groww Nifty Total Market Index Fund Direct Growth</span></div>
                            <div className="cart_icon"><MdOutlineCancel style={{width:"20px",height:"20px"}}/></div>
                        </div>
                    </div>
                    <div className="cart_item">
                        <div className="cart_top">
                            <div className='cart_img'><img src="../../public/stocksicon/AdaniEnterp.webp" alt="" /><span></span> <span className='cart_content'>Groww Nifty Total Market Index Fund Direct Growth</span></div>
                            <div className="cart_icon"><MdOutlineCancel style={{width:"20px",height:"20px"}}/></div>
                        </div>
                    </div>
                    <div className="cart_item">
                        <div className="cart_top">
                            <div className='cart_img'><img src="../../public/stocksicon/AdaniEnterp.webp" alt="" /><span></span> <span className='cart_content'>Groww Nifty Total Market Index Fund Direct Growth</span></div>
                            <div className="cart_icon"><MdOutlineCancel style={{width:"20px",height:"20px"}}/></div>
                        </div>
                    </div>
                </div>
                <div className="cart_right">
                    <h1>Right Cart</h1>
                </div>
            </div>
            <div style={{marginTop:"100px"}}>
                <Footer/>
            </div>
            
        </>
    )
}
export default CartPage