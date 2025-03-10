import {useState} from 'react'
import LoginPage from './LoginPage';
import Footer from './Footer'
import { SlArrowRight } from "react-icons/sl";



function LandingPage(){
    const [modalopen, setModalopen] = useState(false)

    return(
        <>
            <div className="l-container">
                <div className="land-navbar">
                    <div className="land-logo">
                        <img src="../../public/logo/logo.png" alt="" width={"80px"} height={"60px"}/>
                        <h2 style={{marginTop:"10px"}}>Trade<span style={{color:"teal"}}>Galaxy</span></h2>
                    </div>
                    <div className="land-btn">
                        <button onClick={() => setModalopen(true)}>Login/Register</button>
                    </div>
                </div>
                <div className="land-heading">
                    <h1 className='l-head'>
                        <span>All things finance,<br /> all in one place.</span>
                    </h1>
                    <h2 className='l-sub-head'>Empowering a growing India</h2>
                    <div className="l-btn">
                        <button onClick={() => setModalopen(true)}>Get Started</button>
                    </div>
                </div>
                <div className='market-sec'>
                    <div style={{flex:"1"}}>
                        <div className="im-head">
                            <span>Trade Smarter,<br />Invest Better.</span>
                        </div>
                        <div className='sub-head'>
                            Go long or short, play it safe or take the leap—invest on your terms and build your future.
                        </div>
                        <div className='s-list'>
                            <div className='s-item'><span className='item'>Stocks & Intraday</span><span className='item-icon'><SlArrowRight /></span></div>
                            <div className='s-item'><span className='item'>Mutual funds & SIPs</span><span className='item-icon'><SlArrowRight /></span></div>
                            <div className='s-item'><span className='item'>Futures & Options</span><span className='item-icon'><SlArrowRight /></span></div>
                        </div>
                    </div>
                    <div style={{flex:"1"}}>

                    </div>
                </div>
                <div className='market-sec'>
                    <div style={{flex:"1"}}>
                        
                    </div>
                    <div style={{flex:"1"}}>
                        <div className="im-head">
                            <span>Forex,<br />at Your Fingertips.</span>
                        </div>
                        <div className='sub-head'>
                            Go long or short, play it safe or take the leap—invest on your terms and build your future.
                        </div>
                        <div className='s-list'>
                            <div className='s-item'><span className='item'>Stocks & Intraday</span><span className='item-icon'><SlArrowRight /></span></div>
                            <div className='s-item'><span className='item'>Mutual funds & SIPs</span><span className='item-icon'><SlArrowRight /></span></div>
                            <div className='s-item'><span className='item'>Futures & Options</span><span className='item-icon'><SlArrowRight /></span></div>
                        </div>
                    </div>
                </div>
                <div className='market-sec'>
                    <div style={{flex:"1"}}>
                        <div className="im-head">
                            <span>Trade Smarter,<br />Invest Better.</span>
                        </div>
                        <div className='sub-head'>
                            Go long or short, play it safe or take the leap—invest on your terms and build your future.
                        </div>
                        <div className='s-list'>
                            <div className='s-item'><span className='item'>Stocks & Intraday</span><span className='item-icon'><SlArrowRight /></span></div>
                            <div className='s-item'><span className='item'>Mutual funds & SIPs</span><span className='item-icon'><SlArrowRight /></span></div>
                            <div className='s-item'><span className='item'>Futures & Options</span><span className='item-icon'><SlArrowRight /></span></div>
                        </div>
                    </div>
                    <div style={{flex:"1"}}>

                    </div>
                </div>
                <div className="land-heading">
                    <h1 className='l-head'>
                        <span>All things finance,<br /> all in one place.</span>
                    </h1>
                    <h2 className='l-sub-head'>Empowering a growing India</h2>
                    <div className="l-btn">
                        <button onClick={() => setModalopen(true)}>Get Started</button>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
                {modalopen && <LoginPage open={modalopen} close={() => setModalopen(false)} />}
            </div>
            
        </>
    )
}
export default LandingPage