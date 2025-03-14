import { useLocation } from "react-router-dom";
import Header from "./Header";

function StockdetailPage() {
  const location = useLocation();
  const stock = location.state?.stock;

  if (!stock) {
    return <h2 className="error-message">No stock details available</h2>;
  }

  return (
    <>
      <Header pageactive={{ active: "home" }} />
      <hr className="separator" />

      <div className="stock-details-container">
        {/* Stock Header: Name, Logo, and Details */}
        <div className="stock-header">
          <img src={stock.logo} alt="Company Logo" className="stock-logo" />
        </div>
        <div>
            <h1 className="stock-name">{stock.companyname}</h1>
            <p className="stock-ticker">{stock.symbol} • {stock.exchange}</p>
        </div>


        {/* Stock Chart */}
        <div className="chart-container">
          <img src="/TradingView.jpg" alt="Stock Chart" className="trading-chart" />
        </div>

        {/* Stock Price & Change */}
        <div className="price-info">
          <p className="stock-price">{stock.price}</p>
          <p className="stock-change" style={{ color: stock.trend ? "#00B386" : "#EB5B3C",fontSize:"14px",marginTop:"25px" }}>
            {stock.percentage}
          </p>
        </div>

        {/* Additional Stock Details */}
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

        {/* Buy & Sell Buttons */}
        <div className="action-buttons">
          <button className="buy-button">Buy</button>
          <button className="sell-button">Sell</button>
        </div>
      </div>
    </>
  );
}

export default StockdetailPage;
