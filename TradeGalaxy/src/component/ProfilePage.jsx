import React, { useState,useEffect } from 'react'
import axios from "axios";
import Header from './Header'
import Footer from './Footer'
import { MdKeyboardArrowRight } from "react-icons/md";

const url = "http://localhost:4500/"

function profilePage(){
    const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem('Token'))
    const [userdata,setUserdata] = useState([])
    const [useremail,setUseremail] = useState(localStorage.getItem('email'))

    useEffect(() => {
        getuserdetails()
    },[])
    function getuserdetails(){
        axios.post(url+"getuserdata", {token:isLoggedIn,email:useremail})
          .then(res => {
            if(res.status==200){
                console.log(res.data)
                setUserdata(res.data)
            }})
          .catch(e => {
            console.log(e.response.data)
          })
          console.log(userdata)
    }
    return(
        <>
            <div>
                <Header 
                    pageactive ={{active:"profile"}}
                />
            </div>
            <hr style={{marginTop:"20px",color:"#b8b8b8"}}/>
            <div className="profile_container">
                <div className="pro_left">
                    <div className='pro_list'>
                        <div className='pro_circle'>
                            <img src="../../public/logo/profilepic.jpg" alt="" className="pro_circle-img"/>
                        </div>
                        <div className='pro_name'>{userdata?.name || "N/A"}</div>
                    </div>
                    <div className='pro_deatil'>
                        <div className='menu'>Basic Deatils <span className='right_aarow'><MdKeyboardArrowRight style={{width:"24px",height:"24px"}}/></span></div>
                        <div className='menu'>Reports <span className='right_aarow'><MdKeyboardArrowRight style={{width:"24px",height:"24px"}}/></span></div>
                        <div className='menu'>Change Password <span className='right_aarow'><MdKeyboardArrowRight style={{width:"24px",height:"24px"}}/></span></div>
                        <div className='menu'>Change Pin <span className='right_aarow'><MdKeyboardArrowRight style={{width:"24px",height:"24px"}}/></span></div>
                        <div className='menu'>Trading Controls <span className='right_aarow'><MdKeyboardArrowRight style={{width:"24px",height:"24px"}}/></span></div>
                        <div className='menu'>Account Related Forms <span className='right_aarow'><MdKeyboardArrowRight style={{width:"24px",height:"24px"}}/></span></div>
                        <div className='menu'>Nominee Details <span className='right_aarow'><MdKeyboardArrowRight style={{width:"24px",height:"24px"}}/></span></div>
                    </div>
                </div>
                <div className="pro_right">
                    <div className="left_acc_detail">
                        <div className="acc-grp">
                            <label className='acc_label'>User Name</label>
                            <div className='acc_detail'>{userdata?.name || "N/A"}</div>
                        </div>
                        <div className="acc-grp">
                            <label className='acc_label'>Email</label>
                            <div className='acc_detail'>{userdata?.email || "N/A"}</div>
                        </div>
                        <div className="acc-grp">
                            <label className='acc_label'>Mobile</label>
                            <div className='acc_detail'>{userdata?.phone || "N/A"}</div>
                        </div>
                        <div className="acc-grp">
                        </div>

                    </div>
                    <div className="right_acc_detail">
                        <div className="acc-grp">
                            <label className='acc_label'>Unique Client Code</label>
                            <div className='acc_detail'>{userdata?.uniqueclientcode || "N/A"} </div>
                        </div>
                        <div className="acc-grp">
                            <label className='acc_label'>Demat Account No.</label>
                            <div className='acc_detail'>{userdata?.demataccno || "N/A"} </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default profilePage