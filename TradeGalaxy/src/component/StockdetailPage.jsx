import React, { useState } from 'react'
import {useLocation } from "react-router-dom";
import Header from "./Header";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function StockdetailPage() {
  const location = useLocation();
  const stock = location.state?.stock;
  const [activeTab, setActiveTab] = useState("buy");

  if (!stock) {
    return <h2 className="error-message">No stock details available</h2>;
  }

  return (
    <>
      <Header pageactive={{ active: "home" }} />
      <hr className="separator" />

      <div className="stock_content">
        <div className="stock-details-container">
          <div className="stock-header">
            <img src={stock.logo} alt="Company Logo" className="stock-logo" />
          </div>
          <div>
              <h1 className="stock-name">{stock.companyname || stock.fund_name || stock.commodity}</h1>
              <p className="stock-ticker">{stock.symbol} • {stock.exchange}</p>
          </div>
          <div className="chart-container">
            <img src="/TradingView.jpg" alt="Stock Chart" className="trading-chart" />
          </div>
          <div className="price-info">
            <p className="stock-price">{stock.price || stock.nav}</p>
            <p className="stock-change" style={{ color: stock.trend ? "#00B386" : "#EB5B3C",fontSize:"14px",marginTop:"25px" }}>
              {stock.percentage}
            </p>
          </div>
          <div className="additional-details">
            <div className="detail-item">
              <span>Market Cap</span> <strong>{stock.marketCap || "₹1,20,00,000cr"}</strong>
            </div>
            <div className="detail-item">
              <span>52-Week High</span> <strong>₹{stock.high52Week || "3,200"}</strong>
            </div>
            <div className="detail-item">
              <span>52-Week Low</span> <strong>₹{stock.low52Week || "1,850"}</strong>
            </div>
            <div className="detail-item">
              <span>Dividend Yield</span> <strong>{stock.dividendYield ||  "1.2%"}</strong>
            </div>
            <div className="detail-item">
              <span>PE Ratio</span> <strong>{stock.peRatio || "23.5"}</strong>
            </div>
          </div>
        </div>
        <div className="buysell-box">
            <div className="wallet-tabs">
                <button className={activeTab === "add" ? "active" : ""} onClick={() => setActiveTab("buy")}>Buy</button>
                <button className={activeTab === "withdraw" ? "active" : ""} onClick={() => setActiveTab("sell")}>Sell</button>
            </div>
            <div className="wallet-content">
                <div className="stock_trade-day">
                  <div>Delivery</div>
                  <div>Intraday</div>
                  <div>MTF</div>
                  <div style={{border:"none"}}><IoSettings style={{width:"16px",height:"16px"}}/></div>
              </div>
              <div className='buying'>
                  <div>
                      <div style={{marginTop:"10px",marginBottom:"20px"}}>Qty <span style={{fontWeight:"535"}}>NSE</span> <IoIosArrowDown style={{marginLeft:"2px",position:"relative",top:"3px"}}/></div>
                      <div>Price <span style={{fontWeight:"535"}}>Market</span> <IoIosArrowDown style={{marginLeft:"2px",position:"relative",top:"3px"}}/></div>
                  </div>
                  <div>
                      <div style={{border:"1px solid #000",width:"100px",height:"25px",marginTop:"10px",marginBottom:"20px"}}></div>
                      <div style={{border:"1px solid #000",width:"100px",height:"25px", fontWeight:"535",fontSize:"x-small"}}></div>
                  </div>
              </div>
              <div className='card-text'>Order wil be executed at the best price in market</div>
              <hr style={{marginTop:"80px"}}/>
              <div className="buy-btn">
                  <button style={{backgroundColor : `${activeTab === "buy" ? "#00B386" : "#E20606"}`}}>{activeTab === "buy" ? "BUY" : "SELL"}</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default StockdetailPage;
