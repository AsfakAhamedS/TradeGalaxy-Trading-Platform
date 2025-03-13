import React, { useState,useEffect } from 'react'
import axios from "axios";
import Header from './Header'
import Footer from './Footer'

const url = "http://localhost:4500/"

function HomePage(){
    const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem('Token'))
    const [select,setSelect] = useState("stock")
    const [marketdata,setMarketdata] = useState(null)
    const [shown, setShown] = useState(null)
    const [mosttradeshown, setMosttradeshown] = useState(null)
    const [topgainer,setTopgainer] = useState("large")
    const [toploser,setToploser] = useState("large")
    const [fando,setFando] =useState("futures")
    const [currency, setCurrency] = useState("major")
    const [show,setShow] = useState(false)
    const [showallgain,setShowallgain] = useState(false)
    const [showall,setShowall] = useState(false)
    const [tableshowall,settableshowall] = useState(false)
    const [showfunds,setShowfunds] =useState(false)
    const [fstockshow,setFstockshow] =useState(false)
    const [fcommodityshow,setFcommodityshow] =useState(false)
    const [showcurrency,setShowcurrency] =useState(false)
    const [allstockdata,setAllstockdata] =useState(null)
    const [allfunddata,setAllfunddata] =useState(null)
    const [allfstockdata,setAllfstockdata] =useState(null)
    const [allcommodities,setAllcommodites] =useState(null)
    const [alltopgainer,setAlltopgainer] =useState(null)
    const [allfando,setAllfando] =useState(null)
    const [allcurrency,setAllcurrency] =useState(null)

    useEffect(() => {
        getmarket()
      },[])

    function getmarket(){
        axios.post(url+"getmarketdata", {token:isLoggedIn})
          .then(res => {
            if(res.status==200){
                setMarketdata(res.data)
                console?.log(marketdata)
            }})
          .catch(e => {
            console.log(e.response.data)
          }) 
      }
    
    function toggle(){
        setShow(!show)
        axios.post(url+"getfullstockdata", {token:isLoggedIn})
          .then(res => {
            if(res.status==200){
                setAllstockdata(res.data)
            }})
          .catch(e => {
            console.log(e.response.data)
          })
    }
    function toggleone(){
        setShowallgain(!showallgain)
        axios.post(url+"getalltopgainer", {token:isLoggedIn})
          .then(res => {
            if(res.status==200){
                setAlltopgainer(res.data)
            }})
          .catch(e => {
            console.log(e.response.data)
          })
    }
    function toggles(){
        setShowall(!showall)
        axios.post(url+"getalltopgainer", {token:isLoggedIn})
          .then(res => {
            if(res.status==200){
                setAlltopgainer(res.data)
            }})
          .catch(e => {
            console.log(e.response.data)
          })
    }
    function toggletwo(){
        settableshowall(!tableshowall)
        axios.post(url+"getallfando", {token:isLoggedIn})
          .then(res => {
            if(res.status==200){
                setAllfando(res.data)
            }})
          .catch(e => {
            console.log(e.response.data)
          })
    }
    function togglethree(){
        setShowfunds(!showfunds)
        axios.post(url+"getallpopularfunds", {token:isLoggedIn})
          .then(res => {
            if(res.status==200){
                setAllfunddata(res.data)
            }})
          .catch(e => {
            console.log(e.response.data)
          })
        
    }
    function togglefour(){
        setFstockshow(!fstockshow)
        axios.post(url+"getallforexstock", {token:isLoggedIn})
          .then(res => {
            if(res.status==200){
                setAllfstockdata(res.data)
            }})
          .catch(e => {
            console.log(e.response.data)
          })
    }
    function togglefive(){
        setFcommodityshow(!fcommodityshow)
        axios.post(url+"getallcommodities", {token:isLoggedIn})
          .then(res => {
            if(res.status==200){
                setAllcommodites(res.data)
            }})
          .catch(e => {
            console.log(e.response.data)
          })
    }
    function togglesix(){
        setShowcurrency(!showcurrency)
        axios.post(url+"getallcurrency", {token:isLoggedIn})
          .then(res => {
            if(res.status==200){
                setAllcurrency(res.data)
            }})
          .catch(e => {
            console.log(e.response.data)
          })
    }
    return(
        <>
            <div>
                <Header 
                    pageactive ={{active:"home"}}
                />
            </div>
            <div className='home-heading'>
                <ul className='head-list'>
                    <li className='head-item itemone'><button onClick={() => {setSelect("stock")}} 
                    style={{color : `${select === "stock" ? "teal" : "#000"}`,
                    textDecoration : `${select === "stock" ? "underline" : "none"}`,
                    fontSize : `${select === "stock" ? "18px" : null}`,
                    textUnderlineOffset : `${select === "stock" ? "8px" : null}`}}>Stocks</button></li>
                    <li className='head-item itemfour'><button onClick={() => {setSelect("forex")}}
                    style={{color : `${select === "forex" ? "teal" : "#000"}`,
                    textDecoration : `${select === "forex" ? "underline" : "none"}`,
                    fontSize : `${select === "forex" ? "18px" : null}`,
                    textUnderlineOffset : `${select === "forex" ? "8px" : null}`}}>Forex</button></li>
                    <li className='head-item itemfive'><button onClick={() => {setSelect("crypto")}}
                    style={{color : `${select === "crypto" ? "teal" : "#000"}`,
                    textDecoration : `${select === "crypto" ? "underline" : "none"}`,
                    fontSize : `${select === "crypto" ? "18px" : null}`,
                    textUnderlineOffset : `${select === "crypto" ? "8px" : null}`}}>Crypto</button></li>
                </ul>
            </div>
            <hr style={{marginTop:"20px",color:"#b8b8b8"}}/>
            <div className="home-content">
                {
                    (select === "stock") ? (
                        <>
                            <div style={{display:"flex"}}>
                                <div className='stock-title' style={{flex:"1"}}>Indices</div>
                                <div className='stock-title-btn' style={{flex:"1",textAlign:"end",fontSize:"14px",}}>All Indices</div>
                            </div>
                            <div className="stock-content" style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
                                {marketdata?.[0]?.map((item) => (
                                    <div  className="s-indices" key={item.id} onMouseEnter={() => setShown(item.id)} onMouseLeave={() => setShown(null)}>
                                        <div>
                                            <div className="in-item">{item.indices || item.companyname || item.fund_name}</div>
                                            <div className="in-item">
                                                {item.opening || item.price || item.nav}{" "}
                                                <span style={{color: item.trend ? "#00B386" : "#EB5B3C",marginLeft: "5px"}}>
                                                    {item.percentage || item.return || item.one_year_return}
                                                </span>
                                            </div>
                                        </div>
                                        {shown === item.id && (
                                        <div className="dot">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512"
                                            style={{ width: "16px", height: "16px" }}
                                            >
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                            </svg>
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="most-trade">
                                <div style={{display:"flex"}}>
                                    <div className='mt-head'  style={{flex:"1"}}>Most traded on TradeGalaxy</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}> <button className='mt-head-btn' onClick={toggle}>{show ? "See less" : "See more"}</button></div>
                                </div>
                                <div className="c-trade" style={{display:"flex",gap:"13px",flexWrap:"wrap"}}>
                                    {(!show ? marketdata?.[1] : allstockdata)?.map((indexitem) => (
                                        <div className="c-trade-border" key={indexitem.id} onMouseEnter={() => {setMosttradeshown(indexitem.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                            <div style={{position:"relative"}}>
                                                <img src={indexitem.logo} alt="logo"  style={{width:"38px",height:"38px",border:"none"}} className='stock-icons'/>
                                                { mosttradeshown === indexitem.id && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                )}
                                            </div>
                                            <div className="c-trade-title">{indexitem.companyname}</div>
                                            <div className="c-trade-price">{indexitem.price}</div>
                                            <div className="c-trade-per" style={{color:`${indexitem.trend ? "#00B386" : "#EB5B3C"}`}}>{indexitem.percentage}</div>
                                        </div>
                                    ))}
                                    {/* {marketdata?.[1].map((group, groupIndex) => (
                                        <div 
                                            key={groupIndex} 
                                            style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
                                        >
                                            {group?.map((item) => (
                                            <div 
                                                className="s-indices" 
                                                key={item.id}
                                                onMouseEnter={() => setShown(item.id)}
                                                onMouseLeave={() => setShown(null)}
                                            >
                                                <div>
                                                <div className="in-item">{item.indices}</div>
                                                <div className="in-item">
                                                    {item.opening}{" "}
                                                    <span style={{ 
                                                    color: item.trend ? "#00B386" : "#EB5B3C", 
                                                    marginLeft: "5px" 
                                                    }}>
                                                    {item.percentage}
                                                    </span>
                                                </div>
                                                </div>
                                                {shown === item.id && (
                                                <div className="dot">
                                                    <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 128 512" 
                                                    style={{ width: "16px", height: "16px" }}
                                                    >
                                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                                    </svg>
                                                </div>
                                                )}
                                            </div>
                                            ))}
                                        </div>
                                        ))} */}

                                </div>
                            </div>
                            <div className="top-gainers">
                                <div style={{display:"flex"}}>
                                    <div className='tg-head'  style={{flex:"1"}}>Top Gainers</div>
                                    <div className='tg-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal",marginTop:"70px"}}><button className='mt-head-btn' onClick={toggleone}>{showallgain ? "See less" : "See more"}</button></div>
                                </div>
                                <div className='tg-cat' style={{marginBottom:"20px"}}>
                                    <div><button onClick={() => {setTopgainer("large")}}>Large</button></div>
                                    <div><button onClick={() => {setTopgainer("mid")}}>Mid</button></div>
                                    <div><button onClick={() => {setTopgainer("small")}}>Small</button></div>
                                </div>
                                <div className="large-trade" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                                    {(!showallgain ? marketdata?.[2] : alltopgainer)?.map((indexitem) => (
                                        indexitem.cat === topgainer && (
                                            <div className="large-trade-border" key={indexitem.id} onMouseEnter={() => {setMosttradeshown(indexitem.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                            <div style={{position:"relative"}}>
                                                <img src={indexitem.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                    { mosttradeshown === indexitem.id && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                    )}
                                                </div>
                                                <div className="large-trade-title">{indexitem.companyname}</div>
                                                <div className="large-trade-price">{indexitem.price}</div>
                                                <div className="large-trade-per" style={{color:"#00B386" }}>{indexitem.percentage}</div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                            <div className="top-loser">
                                <div style={{display:"flex"}}>
                                    <div className='tg-head'  style={{flex:"1"}}>Top Losers</div>
                                    <div className='tg-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal",marginTop:"70px"}}><button className='mt-head-btn' onClick={toggles}>{showall ? "See less" : "See more"}</button></div>
                                </div>
                                <div className='tg-cat' style={{marginBottom:"20px"}}>
                                    <div><button onClick={() => {setToploser("large")}}>Large</button></div>
                                    <div><button onClick={() => {setToploser("mid")}}>Mid</button></div>
                                    <div><button onClick={() => {setToploser("small")}}>Small</button></div>
                                </div>
                                <div className="large-trade">
                                    {(!showall ? marketdata?.[2] : alltopgainer)?.map((indexitem) => (
                                        indexitem.cat === toploser && (
                                            <div className="large-trade-border" key={indexitem.id} onMouseEnter={() => {setMosttradeshown(indexitem.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                            <div style={{position:"relative"}}>
                                                <img src={indexitem.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                    { mosttradeshown === indexitem.id && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                    )}
                                                </div>
                                                <div className="large-trade-title">{indexitem.companyname}</div>
                                                <div className="large-trade-price">{indexitem.price}</div>
                                                <div className="large-trade-per" style={{color:"#EB5B3C"}}>{indexitem.percentage}</div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className='sec-head'>Top Sectors</div>
                            </div>
                            <div className="top-sectors">
                                <div className='left'>
                                    <div>Banking <span>100</span></div>
                                    <div>Energy <span>100</span></div>
                                    <div>Health Care <span>100</span></div>
                                    <div>FMCG <span>100</span></div>
                                </div>
                                <div className='right'>
                                    <div>Auto Mobile <span>100</span></div>
                                    <div>Tele-Communication <span>100</span></div>
                                    <div>Media <span>100</span></div>
                                    <div>Entertainment <span>100</span></div>
                                </div>
                            </div>
                            <div className="fando">
                                <div style={{display:"flex"}}>
                                    <div className='fo-head'  style={{flex:"1"}}>Future &  Option</div>
                                    <div className='fo-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal",marginTop:"70px"}}><button className='mt-head-btn' onClick={toggletwo}>{tableshowall ? "See less" : "See more"}</button></div>
                                </div>
                                <div className='tg-cat' style={{marginBottom:"20px"}}>
                                    <div><button onClick={() => {setFando("futures")}}>Futures</button></div>
                                    <div><button onClick={() => {setFando("options")}}>Options</button></div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Stocks</th>
                                            <th>Open Price</th>
                                            <th>Close Price</th>
                                            <th>1D Returns</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(!tableshowall ? marketdata?.[3] : allfando)?.map((indexitem) => (
                                                indexitem.cat === fando && (
                                                    <tr key={indexitem.id}>
                                                        <td><img src={indexitem.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/></td>
                                                        <td style={{width:"900px",fontWeight:"535"}}>{indexitem.companyname}</td>
                                                        <td style={{width:"150px"}}>{indexitem.open}</td>
                                                        <td style={{width:"150px"}}>{indexitem.close}</td>
                                                        <td style={{width:"150px",color:`${indexitem.trend ? "#00B386" : "#EB5B3C"}`}}>{indexitem.return}</td>
                                                        <td style={{width:"200px"}}>
                                                            <div style={{position:"relative",top:"12px"}}>
                                                                <div>{indexitem.price}</div>
                                                                <div style={{color:`${indexitem.trend ? "#00B386" : "#EB5B3C"}`,fontSize:"12px"}}>{indexitem.percentage}</div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <div className='sec-head'>Mutual Funds Collection</div>
                            </div>
                            <div className="mf-collection">
                                <div>High return</div>
                                <div>SIP with ₹100</div>
                                <div>Tax Saving</div>
                                <div>Large Cap</div>
                                <div>Mid Cap</div>
                                <div>Small Cap</div>
                            </div>
                            <div className="most-trade">
                                <div style={{display:"flex"}}>
                                    <div className='mt-head'  style={{flex:"1"}}>Popular Funds</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}> <button className='mt-head-btn' onClick={togglethree}>{showfunds ? "See less" : "See more"}</button></div>
                                </div>
                                <div className="c-trade" style={{display:"flex",gap:"15px",flexWrap:"wrap"}}>
                                    {(!showfunds ? marketdata?.[4] : allfunddata)?.map((indexitem) => (
                                        <div className="c-trade-border" style={{maxHeight:"185px"}} key={indexitem.id} onMouseEnter={() => {setMosttradeshown(indexitem.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                            <div style={{position:"relative"}}>
                                                <img src={indexitem.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                { mosttradeshown === indexitem.id && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                )}
                                            </div>
                                            <div className="c-trade-title">{indexitem.fund_name}</div>
                                            <div className="c-trade-price">{indexitem.nav}</div>
                                            <div className="c-trade-per" style={{color:"#00B386"}}>{indexitem.five_year_return}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                        
                    ) : (select === "forex") ? (
                        <>
                            <div style={{display:"flex"}}>
                                <div className='stock-title' style={{flex:"1"}}>Indices</div>
                                <div className='stock-title-btn' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}>All Indices</div>
                            </div>
                            <div className="stock-content" style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
                                    {marketdata?.[5]?.map((indexitem) => (
                                        <div className="s-indices" key={indexitem.id} onMouseEnter={() => {setShown(indexitem.id)}} onMouseLeave={() => {setShown(null)}}>
                                            <div>
                                                <div className='in-item'>{indexitem.indices}</div>
                                                <div className='in-item'>{indexitem.opening} <span style={{color:`${indexitem.trend ? "#00B386" : "#EB5B3C"}`,marginLeft:"5px"}}>{indexitem.percentage}</span></div>
                                            </div>
                                            { shown === indexitem.id && (
                                                <div className='forex-dot'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{width:"16px",height:"16px"}}><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                            <div className="most-trade">
                                <div style={{display:"flex"}}>
                                    <div className='mt-head'  style={{flex:"1"}}>Most Popular Stocks</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}><button className='mt-head-btn' onClick={togglefour}>{fstockshow ? "See less" : "See more"}</button></div>
                                </div>
                                <div className="c-trade" style={{display:"flex",gap:"15px",flexWrap:"wrap"}}>
                                    {(!fstockshow ? marketdata?.[6] : allfstockdata)?.map((indexitem) => (
                                        <div className="c-trade-border" key={indexitem.id} onMouseEnter={() => {setMosttradeshown(indexitem.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                            <div style={{position:"relative"}}>
                                                <img src={indexitem.logo} alt="logo"  style={{width:"38px",height:"38px"}}  className='stock-icons'/>
                                                { mosttradeshown === indexitem.id && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                )}
                                            </div>
                                            <div className="c-trade-title">{indexitem.companyname}</div>
                                            <div className="c-trade-price">{indexitem.price}</div>
                                            <div className="c-trade-per" style={{color:`${indexitem.trend ? "#00B386" : "#EB5B3C"}`}}>{indexitem.percentage}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="most-trade">
                                <div style={{display:"flex"}}>
                                    <div className='mt-head'  style={{flex:"1"}}>Commodities</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}><button className='mt-head-btn' onClick={togglefive}>{fcommodityshow ? "See less" : "See more"}</button></div>
                                </div>
                                <div className="c-trade" style={{display:"flex",gap:"15px",flexWrap:"wrap"}}>
                                    {(!fcommodityshow ?  marketdata?.[7] : allcommodities)?.map((indexitem) => (
                                        <div className="c-trade-border" key={indexitem.id} onMouseEnter={() => {setMosttradeshown(indexitem.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                            <div style={{position:"relative"}}>
                                                <img src={indexitem.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                { mosttradeshown === indexitem.id && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                )}
                                            </div>
                                            <div className="c-trade-title">{indexitem.commodity}</div>
                                            <div className="c-trade-price">{indexitem.price}</div>
                                            <div className="c-trade-per" style={{color:`${indexitem.trend ? "#00B386" : "#EB5B3C"}`}}>{indexitem.percentage}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="forex-currency">
                                <div style={{display:"flex"}}>
                                    <div className='fc-head'  style={{flex:"1"}}>Forex Currency</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}><button className='mt-head-btn' onClick={togglesix}>{showcurrency ? "See less" : "See more"}</button></div>
                                </div>
                                <div className='fc-cat' style={{marginBottom:"20px"}}>
                                    <div><button onClick={() => {setCurrency("major")}}>Major</button></div>
                                    <div><button onClick={() => {setCurrency("minor")}}>Minor</button></div>
                                    <div><button onClick={() => {setCurrency("exotic")}}>Exotic</button></div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Symbol</th>
                                            <th>Spread</th>
                                            <th>Open</th>
                                            <th>Close</th>
                                            <th>Price</th>
                                            <th>Returns</th>
                                            <th>Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {(!showcurrency ? marketdata?.[8] : allcurrency)?.map((indexitem) => (
                                            indexitem.cat === currency && (
                                                <tr key={indexitem.id}>
                                                    <td style={{width:"900px",fontWeight:"535"}}>
                                                        <div>{indexitem.symbol}</div>
                                                        <div style={{fontSize:"12px"}}>{indexitem.full_name}</div>
                                                    </td>
                                                    <td style={{width:"150px"}}>{indexitem.spread}</td>
                                                    <td style={{width:"150px"}}>{indexitem.open}</td>
                                                    <td style={{width:"150px"}}>{indexitem.close}</td>
                                                    <td style={{width:"150px"}}>{indexitem.price}</td>
                                                    <td style={{width:"150px",color:`${indexitem.trend ? "#00B386" : "#EB5B3C"}`}}>{indexitem.return}</td>
                                                    <td style={{width:"150px"}}>{indexitem.volume}</td>
                                                        
                                                </tr>
                                            )
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )
                }
            </div>
            <div style={{marginTop:"100px"}}>
                <Footer/>
            </div>
        </>
    )
}
export default HomePage