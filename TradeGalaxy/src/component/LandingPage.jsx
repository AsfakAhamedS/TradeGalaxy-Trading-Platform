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
                        {/* <iframe style={{marginTop:"120px",borderRadius:"20px"}} width="560" height="315" src="https://www.youtube.com/embed/EYwLa1ZWD2o?si=yn9sxnt-SFgLyF7T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                        <img src="../../public/LandingPage/indianmarket_hero_image.jpg" alt="Image loaded" style={{marginTop:"20px",marginLeft:"45px",borderRadius:"20px",width:"460px",height:"215"}}/>
                    </div>
                </div>
                <div className='market-sec'>
                    <div style={{flex:"1"}}>
                        {/* <iframe style={{marginTop:"120px",borderRadius:"20px"}} width="560" height="315" src="https://www.youtube.com/embed/MFqvLMctU_U?si=0-U2xDmZgADNi9PV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                        <img src="../../public/LandingPage/forex_hero_image.jpg" alt="Image loaded" style={{marginTop:"20px",marginRight:"50px",borderRadius:"20px",width:"600px",height:"350"}}/>
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
                            <div className='s-item'><span className='item'>Currency</span><span className='item-icon'><SlArrowRight /></span></div>
                            <div className='s-item'><span className='item'>Commodities</span><span className='item-icon'><SlArrowRight /></span></div>
                        </div>
                    </div>
                </div>
                <div className='market-sec'>
                    <div style={{flex:"1"}}>
                        <div className="im-head">
                            <span>Trade Crypto,<br />Maximize Gains.</span> 
                        </div>
                        <div className='sub-head'>
                        Go long or short, ride the waves or HODL strong—trade digital assets on your terms and shape your financial future. 
                        </div>
                        <div className='s-list'>
                            <div className='s-item'><span className='item'>Digital Assets</span><span className='item-icon'><SlArrowRight /></span></div>
                            <div className='s-item'><span className='item'>Mutual funds & SIPs</span><span className='item-icon'><SlArrowRight /></span></div>
                            <div className='s-item'><span className='item'>Futures & Options</span><span className='item-icon'><SlArrowRight /></span></div>
                        </div>
                    </div>
                    <div style={{flex:"1"}}>
                        {/* <iframe style={{marginTop:"120px",borderRadius:"20px"}} width="560" height="315" src="https://www.youtube.com/embed/spPTV6_McF8?si=hPZkIU10LI4mkLF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                        <img src="../../public/LandingPage/crypto_hero_image.png" alt="Image loaded" style={{marginTop:"120px",borderRadius:"20px",width:"560px",height:"315"}}/>
                    </div>
                </div>
                <div className="land-heading">
                    <h1 className='l-head'>
                        <span>Trade with confidence,<br /> invest with vision.</span> 
                    </h1>
                    <h2 className='l-sub-head'>Your journey to financial success starts here. </h2>
                    <div className="l-btn">
                        <button onClick={() => setModalopen(true)}>Get Started</button>
                    </div>
                    <div className='quote'>
                        <div>
                            "If you don’t find a way to <span style={{color:"#00B386"}}>make money</span> while you sleep, <br />you will work until you <span style={{color:"#EB5B3C"}}>die</span>."
                        </div>
                        <div className='author'>— Warren Buffett</div>
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