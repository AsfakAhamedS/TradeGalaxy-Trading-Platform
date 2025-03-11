import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const indice = [
    {
        "id":1,
        "indices": "NIFTY",
        "opening": "23,400.45",
        "percentage": "0.40 (90%)"
    },
    {
        "id":2,
        "indices": "BANKNIFTY",
        "opening": "23,400.45",
        "percentage": "0.40 (90%)"
    },
    {
        "id":3, 
        "indices": "SENSEX",
        "opening": "23,400.45",
        "percentage": "0.40 (90%)"
    },
    {
        "id":4,
        "indices": "FINNIFTY",
        "opening": "23,400.45",
        "percentage": "0.40 (90%)"
    },
    {
        "id":6,
        "indices": "MIDCAP NIFTY",
        "opening": "23,400.45",
        "percentage": "0.40 (90%)"
    }
]

const mtrade = [
    {
        "id":1,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":2,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":3,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":4,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    ,
    {
        "id":5,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    }
    ,
    {
        "id":6,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    }
]
const topgainerdata = [
    {
        "id":1,
        "cat":"large",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":2,
        "cat":"large",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":3,
        "cat":"large",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":4,
        "cat":"large",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    ,
    {
        "id":5,
        "cat":"large",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    }
    ,
    {
        "id":6,
        "cat":"large",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":7,
        "cat":"mid",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Tata Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":8,
        "cat":"mid",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Tata Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":9,
        "cat":"mid",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Tata Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":10,
        "cat":"mid",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Tata Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    ,
    {
        "id":11,
        "cat":"mid",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Tata Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    }
    ,
    {
        "id":12,
        "cat":"mid",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Tata Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":13,
        "cat":"small",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Jio Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":14,
        "cat":"small",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Tata Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":15,
        "cat":"small",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Jio Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    {
        "id":16,
        "cat":"small",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Jio Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    },
    ,
    {
        "id":17,
        "cat":"small",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Jio Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    }
    ,
    {
        "id":18,
        "cat":"small",
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Jio Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)"
    }
]

const futureandoption =[
    {
        "id":1,
        "cat":"gainer",
        "logo":"../../public/stocksicon/Adani.webp",
        "stocks":"Solar Energy",
        "price":"₹50",
        "return":"100.23 (0.40%)",
        "volume":"2,30,400"
    },
    {
        "id":2,
        "cat":"gainer",
        "logo":"../../public/stocksicon/Adani.webp",
        "stocks":"Solar Energy",
        "price":"₹50",
        "return":"100.23 (0.40%)",
        "volume":"2,30,400"
    },
    {
        "id":3,
        "cat":"gainer",
        "logo":"../../public/stocksicon/Adani.webp",
        "stocks":"Solar Energy",
        "price":"₹50",
        "return":"100.23 (0.40%)",
        "volume":"2,30,400"
    },
    {
        "id":4,
        "cat":"gainer",
        "logo":"../../public/stocksicon/Adani.webp",
        "stocks":"Solar Energy",
        "price":"₹50",
        "return":"100.23 (0.40%)",
        "volume":"2,30,400"
    },
    {
        "id":5,
        "cat":"gainer",
        "logo":"../../public/stocksicon/Adani.webp",
        "stocks":"Solar Energy",
        "price":"₹50",
        "return":"100.23 (0.40%)",
        "volume":"2,30,400"
    },
    {
        "id":6,
        "cat":"loser",
        "logo":"../../public/stocksicon/Adani.webp",
        "stocks":"Solar Energy",
        "price":"₹60",
        "return":"100.23 (0.40%)",
        "volume":"2,30,400"
    },
    {
        "id":7,
        "cat":"loser",
        "logo":"../../public/stocksicon/Adani.webp",
        "stocks":"Solar Energy",
        "price":"₹60",
        "return":"100.23 (0.40%)",
        "volume":"2,30,400"
    },
    {
        "id":8,
        "cat":"loser",
        "logo":"../../public/stocksicon/Adani.webp",
        "stocks":"Solar Energy",
        "price":"₹60",
        "return":"100.23 (0.40%)",
        "volume":"2,30,400"
    },
    {
        "id":9,
        "cat":"loser",
        "logo":"../../public/stocksicon/Adani.webp",
        "stocks":"Solar Energy",
        "price":"₹60",
        "return":"100.23 (0.40%)",
        "volume":"2,30,400"
    },
    {
        "id":10,
        "cat":"loser",
        "logo":"../../public/stocksicon/Adani.webp",
        "stocks":"Solar Energy",
        "price":"₹60",
        "return":"100.23 (0.40%)",
        "volume":"2,30,400"
    }
]

const forexindex = [
    {
        "id":1,
        "indices": "NASDAQ",
        "opening": "17,911.50",
        "percentage": "0.40 (1.5%)"
    },
    {
        "id":2,
        "indices": "NIKKEI",
        "opening": "37,076.23",
        "percentage": "0.40 (1.5%)"
    },
    {
        "id":3,
        "indices": "HANG SENG",
        "opening": "17,911.50",
        "percentage": "0.40 (1.5%)"
    },
    {
        "id":4,
        "indices": "DAX",
        "opening": "17,911.50",
        "percentage": "0.40 (1.5%)"
    },
    {
        "id":5,
        "indices": "FTSE",
        "opening": "17,911.50",
        "percentage": "0.40 (1.5%)"
    },
    
]

const forexstock = [
          {
            "id":1,
            "logo":"../../public/stocksicon/Adani.webp",
            "name": "Amazon",
            "ticker": "AMZN",
            "price": 3552.30,
            "percentage": 1.25
          },
          {
            "id":2,
            "logo":"../../public/stocksicon/Adani.webp",
            "name": "Microsoft",
            "ticker": "MSFT",
            "price": 412.50,
            "percentage": -0.78
          },
          {
            "id":3,
            "logo":"../../public/stocksicon/Adani.webp",
            "name": "Google",
            "ticker": "GOOGL",
            "price": 2850.75,
            "percentage": 2.10
          },
          {
            "id":4,
            "logo":"../../public/stocksicon/Adani.webp",
            "name": "Tesla",
            "ticker": "TSLA",
            "price": 685.25,
            "percentage": -1.45
          },
          {
            "id":5,
            "logo":"../../public/stocksicon/Adani.webp",
            "name": "Oracle",
            "ticker": "ORCL",
            "price": 97.60,
            "percentage": 0.65
          },
          {
            "id":6,
            "logo":"../../public/stocksicon/Adani.webp",
            "name": "Simens",
            "ticker": "ORCL",
            "price": 97.60,
            "percentage": 0.65
          }    
]
const forexcom = [
    {
        "id":1,
        "logo":"../../public/stocksicon/Adani.webp",
        "name": "Gold",
        "ticker": "XAU/USD",
        "price": 2045.50,
        "percentage": 1.12
      },
      {
        "id":2,
        "logo":"../../public/stocksicon/Adani.webp",
        "name": "Silver",
        "ticker": "XAG/USD",
        "price": 23.75,
        "percentage": -0.85
      },
      {
        "id":3,
        "logo":"../../public/stocksicon/Adani.webp",
        "name": "Crude Oil",
        "ticker": "WTI",
        "price": 78.90,
        "percentage": 0.45
      },
      {
        "id":4,
        "logo":"../../public/stocksicon/Adani.webp",
        "name": "Natural Gas",
        "ticker": "NG",
        "price": 2.85,
        "percentage": -1.30
      },
      {
        "id":5,
        "logo":"../../public/stocksicon/Adani.webp",
        "name": "Copper",
        "ticker": "HG",
        "price": 4.15,
        "percentage": 0.98
      },
      {
        "id":6,
        "logo":"../../public/stocksicon/Adani.webp",
        "name": "Copper",
        "ticker": "HG",
        "price": 4.15,
        "percentage": 0.98
      }
]

const forexcurrency = [
    {
        "id":1,
        "cat":"major",
        "symbol": "EUR/USD",
        "open": 1.0850,
        "close": 1.0885,
        "price": 1.0890,
        "return": 0.37,
        "volume": 1250000000
      },
      {
        "id":2,
        "cat":"major",
        "symbol": "USD/JPY",
        "open": 150.25,
        "close": 149.80,
        "price": 149.90,
        "return": -0.23,
        "volume": 980000000
      },
      {
        "id":3,
        "cat":"major",
        "symbol": "GBP/USD",
        "open": 1.2635,
        "close": 1.2670,
        "price": 1.2660,
        "return": 0.20,
        "volume": 850000000
      },
      {
        "id":4,
        "cat":"major",
        "symbol": "USD/CHF",
        "open": 0.8750,
        "close": 0.8725,
        "price": 0.8730,
        "return": -0.23,
        "volume": 670000000
      },
      {
        "id":5,
        "cat":"major",
        "symbol": "AUD/USD",
        "open": 0.6540,
        "close": 0.6575,
        "price": 0.6560,
        "return": 0.31,
        "volume": 720000000
      },
      {
        "id":6,
        "cat":"minor",
        "symbol": "EUR/GBP",
        "open": 0.8570,
        "close": 0.8595,
        "price": 0.8580,
        "return": 0.29,
        "volume": 480000000
      },
      {
        "id":7,
        "cat":"minor",
        "symbol": "GBP/JPY",
        "open": 190.50,
        "close": 189.80,
        "price": 190.00,
        "return": -0.37,
        "volume": 520000000
      },
      {
        "id":8,
        "cat":"minor",
        "symbol": "EUR/AUD",
        "open": 1.6600,
        "close": 1.6655,
        "price": 1.6640,
        "return": 0.33,
        "volume": 390000000
      },
      {
        "id":9,
        "cat":"minor",
        "symbol": "NZD/USD",
        "open": 0.6025,
        "close": 0.6040,
        "price": 0.6035,
        "return": 0.25,
        "volume": 350000000
      },
      {
        "id":10,
        "cat":"minor",
        "symbol": "CAD/JPY",
        "open": 110.50,
        "close": 110.80,
        "price": 110.70,
        "return": 0.27,
        "volume": 420000000
      },
      {
        "id":11,
        "cat":"exotic",
        "symbol": "USD/INR",
        "open": 31.50,
        "close": 31.75,
        "price": 31.65,
        "return": 0.79,
        "volume": 150000000
      },
      {
        "id":12,
        "cat":"exotic",
        "symbol": "USD/ZAR",
        "open": 18.45,
        "close": 18.30,
        "price": 18.35,
        "return": -0.54,
        "volume": 180000000
      },
      {
        "id":13,
        "cat":"exotic",
        "symbol": "USD/MXN",
        "open": 17.10,
        "close": 17.25,
        "price": 17.20,
        "return": 0.88,
        "volume": 200000000
      },
      {
        "id":14,
        "cat":"exotic",
        "symbol": "USD/SGD",
        "open": 1.3505,
        "close": 1.3520,
        "price": 1.3510,
        "return": 0.12,
        "volume": 160000000
      },
      {
        "id":15,
        "cat":"exotic",
        "symbol": "USD/THB",
        "open": 35.50,
        "close": 35.40,
        "price": 35.45,
        "return": -0.28,
        "volume": 140000000
      }
]

function HomePage(){
    const [select,setSelect] = useState("stock")
    const [shown, setShown] = useState(null)
    const [mosttradeshown, setMosttradeshown] = useState(null)
    const [topgainer,setTopgainer] = useState("large")
    const [currency, setCurrency] = useState("major")
    return(
        <>
            <div>
                <Header/>
            </div>
            <div className='home-heading'>
                <ul className='head-list'>
                    <li className='head-item itemone'><button onClick={() => {setSelect("stock")}}>Stocks</button></li>
                    <li className='head-item itemfour'><button onClick={() => {setSelect("forex")}}>Forex</button></li>
                    <li className='head-item itemfive'><button onClick={() => {setSelect("crypto")}}>Crypto</button></li>
                </ul>
            </div>
            <hr style={{marginTop:"20px",color:"#b8b8b8"}}/>
            <div className="home-content">
                {
                    (select === "stock") ? (
                        <>
                            <div style={{display:"flex"}}>
                                <div className='stock-title' style={{flex:"1"}}>Indices</div>
                                <div className='stock-title' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}>All Indices</div>
                            </div>
                            <div className="stock-content">
                                    {indice?.map((item) => (
                                        <div className="s-indices" key={item.id} onMouseEnter={() => {setShown(item.id)}} onMouseLeave={() => {setShown(null)}}>
                                            <div>
                                                <div className='in-item'>{item.indices}</div>
                                                <div className='in-item'>{item.opening} <span style={{color:"#00B386",marginLeft:"10px"}}>{item.percentage}</span></div>
                                            </div>
                                            { shown === item.id && (
                                                <div className='dot'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{width:"16px",height:"16px"}}><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                            <div className="most-trade">
                                <div style={{display:"flex"}}>
                                    <div className='mt-head'  style={{flex:"1"}}>Most traded on TradeGalaxy</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}>See more</div>
                                </div>
                                <div className="c-trade">
                                    {mtrade?.map((item) => (
                                        <div className="c-trade-border" key={item.id} onMouseEnter={() => {setMosttradeshown(item.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                            <div style={{position:"relative"}}>
                                                <img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                { mosttradeshown === item.id && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                )}
                                            </div>
                                            <div className="c-trade-title">{item.companyname}</div>
                                            <div className="c-trade-price">{item.price}</div>
                                            <div className="c-trade-per" style={{color:"#00B386"}}>{item.percentage}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="top-gainers">
                                <div style={{display:"flex"}}>
                                    <div className='tg-head'  style={{flex:"1"}}>Top Gainers</div>
                                    <div className='tg-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal",marginTop:"70px"}}>See more</div>
                                </div>
                                <div className='tg-cat' style={{marginBottom:"20px"}}>
                                    <div><button onClick={() => {setTopgainer("large")}}>Large</button></div>
                                    <div><button onClick={() => {setTopgainer("mid")}}>Mid</button></div>
                                    <div><button onClick={() => {setTopgainer("small")}}>Small</button></div>
                                </div>
                                {
                                    (topgainer === "large") ? (
                                        <>
                                            <div className="large-trade">
                                                {topgainerdata?.map((item) => (
                                                    item.cat === "large" && (
                                                        <div className="large-trade-border" key={item.id} onMouseEnter={() => {setMosttradeshown(item.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                                        <div style={{position:"relative"}}>
                                                            <img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                            { mosttradeshown === item.id && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                            )}
                                                        </div>
                                                        <div className="large-trade-title">{item.companyname}</div>
                                                        <div className="large-trade-price">{item.price}</div>
                                                        <div className="large-trade-per" style={{color:"#00B386"}}>{item.percentage}</div>
                                                    </div>
                                                    )
                                                ))}
                                            </div>
                                        </>
                                    ) : (topgainer === "mid") ? (
                                        <>
                                            <div className="large-trade">
                                                {topgainerdata?.map((item) => (
                                                    item.cat === "mid" && (
                                                        <div className="large-trade-border" key={item.id} onMouseEnter={() => {setMosttradeshown(item.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                                        <div style={{position:"relative"}}>
                                                            <img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                            { mosttradeshown === item.id && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                            )}
                                                        </div>
                                                        <div className="large-trade-title">{item.companyname}</div>
                                                        <div className="large-trade-price">{item.price}</div>
                                                        <div className="large-trade-per" style={{color:"#00B386"}}>{item.percentage}</div>
                                                    </div>
                                                    )
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="large-trade">
                                                {topgainerdata?.map((item) => (
                                                    item.cat === "small" && (
                                                        <div className="large-trade-border" key={item.id} onMouseEnter={() => {setMosttradeshown(item.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                                        <div style={{position:"relative"}}>
                                                            <img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                            { mosttradeshown === item.id && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                            )}
                                                        </div>
                                                        <div className="large-trade-title">{item.companyname}</div>
                                                        <div className="large-trade-price">{item.price}</div>
                                                        <div className="large-trade-per" style={{color:"#00B386"}}>{item.percentage}</div>
                                                    </div>
                                                    )
                                                ))}
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                            <div className="top-loser">
                                <div style={{display:"flex"}}>
                                    <div className='tg-head'  style={{flex:"1"}}>Top Losers</div>
                                    <div className='tg-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal",marginTop:"70px"}}>See more</div>
                                </div>
                                <div className='tg-cat' style={{marginBottom:"20px"}}>
                                    <div><button onClick={() => {setTopgainer("large")}}>Large</button></div>
                                    <div><button onClick={() => {setTopgainer("mid")}}>Mid</button></div>
                                    <div><button onClick={() => {setTopgainer("small")}}>Small</button></div>
                                </div>
                                {
                                    (topgainer === "large") ? (
                                        <>
                                            <div className="large-trade">
                                                {topgainerdata?.map((item) => (
                                                    item.cat === "large" && (
                                                        <div className="large-trade-border" key={item.id} onMouseEnter={() => {setMosttradeshown(item.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                                        <div style={{position:"relative"}}>
                                                            <img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                            { mosttradeshown === item.id && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                            )}
                                                        </div>
                                                        <div className="large-trade-title">{item.companyname}</div>
                                                        <div className="large-trade-price">{item.price}</div>
                                                        <div className="large-trade-per" style={{color:"#EB5B3C"}}>{item.percentage}</div>
                                                    </div>
                                                    )
                                                ))}
                                            </div>
                                        </>
                                    ) : (topgainer === "mid") ? (
                                        <>
                                            <div className="large-trade">
                                                {topgainerdata?.map((item) => (
                                                    item.cat === "mid" && (
                                                        <div className="large-trade-border" key={item.id} onMouseEnter={() => {setMosttradeshown(item.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                                        <div style={{position:"relative"}}>
                                                            <img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                            { mosttradeshown === item.id && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                            )}
                                                        </div>
                                                        <div className="large-trade-title">{item.companyname}</div>
                                                        <div className="large-trade-price">{item.price}</div>
                                                        <div className="large-trade-per" style={{color:"#EB5B3C"}}>{item.percentage}</div>
                                                    </div>
                                                    )
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="large-trade">
                                                {topgainerdata?.map((item) => (
                                                    item.cat === "small" && (
                                                        <div className="large-trade-border" key={item.id} onMouseEnter={() => {setMosttradeshown(item.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                                        <div style={{position:"relative"}}>
                                                            <img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                            { mosttradeshown === item.id && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                            )}
                                                        </div>
                                                        <div className="large-trade-title">{item.companyname}</div>
                                                        <div className="large-trade-price">{item.price}</div>
                                                        <div className="large-trade-per" style={{color:"#EB5B3C"}}>{item.percentage}</div>
                                                    </div>
                                                    )
                                                ))}
                                            </div>
                                        </>
                                    )
                                }
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
                                    <div className='fo-head'  style={{flex:"1"}}>F&O Stocks</div>
                                    <div className='fo-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal",marginTop:"70px"}}>See more</div>
                                </div>
                                <div className='tg-cat' style={{marginBottom:"20px"}}>
                                    <div><button onClick={() => {setTopgainer("gainer")}}>Gainer</button></div>
                                    <div><button onClick={() => {setTopgainer("loser")}}>Loser</button></div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Stocks</th>
                                            <th>Price</th>
                                            <th>Returns</th>
                                            <th>Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (topgainer === "gainer") ? (
                                                <>
                                                    {futureandoption?.map((item) => (
                                                        item.cat === "gainer" && (
                                                            <tr key={item.id}>
                                                                <td><img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/></td>
                                                                <td style={{width:"500px"}}>{item.stocks}</td>
                                                                <td style={{width:"100px"}}>{item.price}</td>
                                                                <td style={{width:"150px",color:"#EB5B3C"}}>{item.return}</td>
                                                                <td style={{width:"100px"}}>{item.volume}</td>
                                                            </tr>
                                                        )
                                                    ))}
                                                </>
                                            ) :  (
                                                <>
                                                  {futureandoption?.map((item) => (
                                                        item.cat === "loser" && (
                                                            <tr key={item.id}>
                                                                <td><img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/></td>
                                                                <td style={{width:"500px"}}>{item.stocks}</td>
                                                                <td style={{width:"100px"}}>{item.price}</td>
                                                                <td style={{width:"150px", color:"#EB5B3C"}}>{item.return}</td>
                                                                <td style={{width:"100px"}}>{item.volume}</td>
                                                            </tr>
                                                        )
                                                    ))}  
                                                </>
                                            )
                                        }
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
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}>See more</div>
                                </div>
                                <div className="c-trade">
                                    {mtrade?.map((item) => (
                                        <div className="c-trade-border" key={item.id} onMouseEnter={() => {setMosttradeshown(item.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                            <div style={{position:"relative"}}>
                                                <img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                { mosttradeshown === item.id && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                )}
                                            </div>
                                            <div className="c-trade-title">{item.companyname}</div>
                                            <div className="c-trade-price">{item.price}</div>
                                            <div className="c-trade-per" style={{color:"#00B386"}}>{item.percentage}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                        
                    ) : (select === "forex") ? (
                        <>
                             <div style={{display:"flex"}}>
                                <div className='stock-title' style={{flex:"1"}}>Indices</div>
                                <div className='stock-title' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}>All Indices</div>
                            </div>
                            <div className="stock-content">
                                    {forexindex?.map((item) => (
                                        <div className="s-indices" key={item.id} onMouseEnter={() => {setShown(item.id)}} onMouseLeave={() => {setShown(null)}}>
                                            <div>
                                                <div className='in-item'>{item.indices}</div>
                                                <div className='in-item'>{item.opening} <span style={{color:"#EB5B3C",marginLeft:"10px"}}>{item.percentage}</span></div>
                                            </div>
                                            { shown === item.id && (
                                                <div className='dot'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{width:"16px",height:"16px"}}><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                            <div className="most-trade">
                                <div style={{display:"flex"}}>
                                    <div className='mt-head'  style={{flex:"1"}}>Most Popular Stocks</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}>See more</div>
                                </div>
                                <div className="c-trade">
                                    {forexstock?.map((item) => (
                                        <div className="c-trade-border" key={item.id} onMouseEnter={() => {setMosttradeshown(item.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                            <div style={{position:"relative"}}>
                                                <img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                { mosttradeshown === item.id && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                )}
                                            </div>
                                            <div className="c-trade-title">{item.name}</div>
                                            <div className="c-trade-price">{item.price}</div>
                                            <div className="c-trade-per" style={{color:"#00B386"}}>{item.percentage}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="most-trade">
                                <div style={{display:"flex"}}>
                                    <div className='mt-head'  style={{flex:"1"}}>Commodities</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}>See more</div>
                                </div>
                                <div className="c-trade">
                                    {forexcom?.map((item) => (
                                        <div className="c-trade-border" key={item.id} onMouseEnter={() => {setMosttradeshown(item.id)}} onMouseLeave={() => {setMosttradeshown(null)}}>
                                            <div style={{position:"relative"}}>
                                                <img src={item.logo} alt="logo"  style={{width:"38px",height:"38px",border:"1px solid #000"}}/>
                                                { mosttradeshown === item.id && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"18px",height:"18px",position:"absolute",right:"10px",top:"5px"}}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                                )}
                                            </div>
                                            <div className="c-trade-title">{item.name}</div>
                                            <div className="c-trade-price">{item.price}</div>
                                            <div className="c-trade-per" style={{color:"#00B386"}}>{item.percentage}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="forex-currency">
                                <div style={{display:"flex"}}>
                                    <div className='fc-head'  style={{flex:"1"}}>F&O Stocks</div>
                                    <div className='fc-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal",marginTop:"70px"}}>See more</div>
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
                                            <th>Open</th>
                                            <th>Close</th>
                                            <th>Price</th>
                                            <th>Returns</th>
                                            <th>Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (currency === "major") ? (
                                                <>
                                                    {forexcurrency?.map((item) => (
                                                        item.cat === "major" && (
                                                            <tr key={item.id}>
                                                                <td style={{width:"500px"}}>{item.symbol}</td>
                                                                <td style={{width:"100px"}}>{item.open}</td>
                                                                <td style={{width:"500px"}}>{item.close}</td>
                                                                <td style={{width:"500px"}}>{item.price}</td>
                                                                <td style={{width:"150px",color:"#EB5B3C"}}>{item.return}</td>
                                                                <td style={{width:"100px"}}>{item.volume}</td>
                                                            </tr>
                                                        )
                                                    ))}
                                                </>
                                            ) : (currency === "minor") ? (
                                                <>
                                                  {forexcurrency?.map((item) => (
                                                        item.cat === "minor" && (
                                                            <tr key={item.id}>
                                                                <td style={{width:"500px"}}>{item.symbol}</td>
                                                                <td style={{width:"100px"}}>{item.open}</td>
                                                                <td style={{width:"500px"}}>{item.close}</td>
                                                                <td style={{width:"500px"}}>{item.price}</td>
                                                                <td style={{width:"150px",color:"#EB5B3C"}}>{item.return}</td>
                                                                <td style={{width:"100px"}}>{item.volume}</td>
                                                            </tr>
                                                        )
                                                    ))}  
                                                </>
                                            ) :  (
                                                <>
                                                  {forexcurrency?.map((item) => (
                                                        item.cat === "exotic" && (
                                                            <tr key={item.id}>
                                                                <td style={{width:"500px"}}>{item.symbol}</td>
                                                                <td style={{width:"100px"}}>{item.open}</td>
                                                                <td style={{width:"500px"}}>{item.close}</td>
                                                                <td style={{width:"500px"}}>{item.price}</td>
                                                                <td style={{width:"150px",color:"#EB5B3C"}}>{item.return}</td>
                                                                <td style={{width:"100px"}}>{item.volume}</td>
                                                            </tr>
                                                        )
                                                    ))}  
                                                </>
                                            )
                                        }
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