import React from 'react'

function Header(){
    return(
        <>
            <div className="navbar">
                <div className="nav-content">
                    <div className="nav-left">
                        <div className="header">
                            <img src="../../public/logo/logo.png" alt="" width={"80px"} height={"60px"}/>
                            <h2 style={{marginTop:"10px"}}>Trade<span style={{color:"teal"}}>Galaxy</span></h2>
                        </div>
                        <div className="nav-item">
                            <button className='item'>Explore</button>
                            <button className='item'>Dashboard</button>
                        </div>
                    </div>
                    <div className="nav-center">
                        <div className='s-bar'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"20px",height:"20px"}}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                            <input type="text" placeholder='Search...'/>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="i-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"22px",height:"22px"}}><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{width:"22px",height:"22px"}}><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        </div>
                        <button className='c-btn'>
                            <div className='circle'>
                                <img src="../../public/logo/profilepic.jpg" alt="" className="circle-img"/>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"20px",height:"20px",marginTop:"30"}}><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header