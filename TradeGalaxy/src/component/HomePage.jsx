import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const dataset = [
    {
        "market_data": {
            "indian_indices": [
                {
                    "id":1,
                    "indices": "NIFTY 50",
                    "opening": "22,497.90",
                    "percentage": "3.60 (0.17%)",
                    "trend":false
                },
                {
                    "id":2,
                    "indices": "BANKNIFTY",
                    "opening": "47,889.25",
                    "percentage": "37.11 (0.11%)",
                    "trend":true
                },
                {
                    "id":3, 
                    "indices": "SENSEX",
                    "opening": "74,117.02",
                    "percentage": "1.05 (0.00%)",
                    "trend":false
                },
                {
                    "id":4,
                    "indices": "FINNIFTY",
                    "opening": "23,400.45",
                    "percentage": "0.40 (90%)",
                    "trend":true
                },
                {
                    "id":6,
                    "indices": "MIDCAP NIFTY",
                    "opening": "11,011.01",
                    "percentage": "51.60 (0.47%)",
                    "trend":false
                }
            ],
            "indian_stocks":[
                {
                    "id": 1,
                    "cat": "large",
                    "logo": "../../public/stocksicon/RelianceInds.webp",
                    "companyname": "Reliance Industries",
                    "price": "₹2,650",
                    "percentage": "1.10 (0.25%)",
                    "marketcap": "₹17,50,000 Cr",
                    "trend": true
                },
                {
                    "id": 2,
                    "cat": "large",
                    "logo": "../../public/stocksicon/TataMotors.webp",
                    "companyname": "Tata Motors",
                    "price": "₹725",
                    "percentage": "-0.80 (-0.18%)",
                    "marketcap": "₹2,90,000 Cr",
                    "trend": false
                },
                {
                    "id": 3,
                    "cat": "large",
                    "logo": "../../public/stocksicon/HDFCBank.webp",
                    "companyname": "HDFC Bank",
                    "price": "₹1,650",
                    "percentage": "2.30 (0.65%)",
                    "marketcap": "₹12,40,000 Cr",
                    "trend": true
                },
                {
                    "id": 4,
                    "cat": "large",
                    "logo": "../../public/stocksicon/Infosys.webp",
                    "companyname": "Infosys Ltd",
                    "price": "₹1,525",
                    "percentage": "-12.80 (-0.83%)",
                    "marketcap": "₹6,30,000 Cr",
                    "trend": false
                },
                {
                    "id": 5,
                    "cat": "mid",
                    "logo": "../../public/stocksicon/ZomatoLtd.webp",
                    "companyname": "Zomato Ltd",
                    "price": "₹145",
                    "percentage": "2.00 (1.40%)",
                    "marketcap": "₹1,20,000 Cr",
                    "trend": true
                },
                {
                    "id": 6,
                    "cat": "large",
                    "logo": "../../public/stocksicon/StBkofIndia.webp",
                    "companyname": "State Bank of India",
                    "price": "₹605",
                    "percentage": "-5.25 (-0.86%)",
                    "marketcap": "₹5,40,000 Cr",
                    "trend": false
                },
                {
                    "id": 7,
                    "cat": "large",
                    "logo": "../../public/stocksicon/AdaniEnterp.webp",
                    "companyname": "Adani Enterprises",
                    "price": "₹3,250",
                    "percentage": "2.80 (0.87%)",
                    "marketcap": "₹4,50,000 Cr",
                    "trend": true
                },
                {
                    "id": 8,
                    "cat": "large",
                    "logo": "../../public/stocksicon/TataMotors.webp",
                    "companyname": "TCS",
                    "price": "₹3,890",
                    "percentage": "-2.10 (-0.54%)",
                    "marketcap": "₹14,60,000 Cr",
                    "trend": false
                },
                {
                    "id": 9,
                    "cat": "large",
                    "logo": "../../public/stocksicon/HDFCBank.webp",
                    "companyname": "HDFC Bank",
                    "price": "₹1,650",
                    "percentage": "1.80 (0.75%)",
                    "marketcap": "₹11,20,000 Cr",
                    "trend": true
                },
                {
                    "id": 10,
                    "cat": "large",
                    "logo": "../../public/stocksicon/Infosys.webp",
                    "companyname": "Infosys Ltd",
                    "price": "₹1,550",
                    "percentage": "-3.20 (-0.68%)",
                    "marketcap": "₹6,50,000 Cr",
                    "trend": false
                },
                {
                    "id": 11,
                    "cat": "large",
                    "logo": "../../public/stocksicon/HindUnilever.webp",
                    "companyname": "Hindustan Unilever",
                    "price": "₹2,370",
                    "percentage": "1.90 (0.80%)",
                    "marketcap": "₹5,80,000 Cr",
                    "trend": true
                },
                {
                    "id": 12,
                    "cat": "large",
                    "logo": "../../public/stocksicon/ICICIBank.webp",
                    "companyname": "ICICI Bank",
                    "price": "₹960",
                    "percentage": "-2.45 (-1.10%)",
                    "marketcap": "₹7,10,000 Cr",
                    "trend": false
                },
                {
                    "id": 13,
                    "cat": "mid",
                    "logo": "../../public/stocksicon/BajajHousingFinanceLtd.webp",
                    "companyname": "Bajaj Finance",
                    "price": "₹7,120",
                    "percentage": "5.50 (0.78%)",
                    "marketcap": "₹4,10,000 Cr",
                    "trend": true
                },
                {
                    "id": 14,
                    "cat": "mid",
                    "logo": "../../public/stocksicon/LarsenToubro.webp",
                    "companyname": "Larsen & Toubro",
                    "price": "₹3,250",
                    "percentage": "-8.75 (-1.30%)",
                    "marketcap": "₹3,80,000 Cr",
                    "trend": false
                },
                {
                    "id": 15,
                    "cat": "mid",
                    "logo": "../../public/stocksicon/StBkofIndia.webp",
                    "companyname": "State Bank of India",
                    "price": "₹620",
                    "percentage": "6.50 (1.05%)",
                    "marketcap": "₹5,20,000 Cr",
                    "trend": true
                },
                {
                    "id": 16,
                    "cat": "mid",
                    "logo": "../../public/stocksicon/ZomatoLtd.webp",
                    "companyname": "Zomato Ltd",
                    "price": "₹150",
                    "percentage": "2.85 (1.90%)",
                    "marketcap": "₹1,40,000 Cr",
                    "trend": true
                },
                {
                    "id": 17,
                    "cat": "mid",
                    "logo": "../../public/stocksicon/AsianPaints.webp",
                    "companyname": "Asian Paints",
                    "price": "₹2,960",
                    "percentage": "-3.70 (-1.25%)",
                    "marketcap": "₹3,10,000 Cr",
                    "trend": false
                },
                {
                    "id": 18,
                    "cat": "mid",
                    "logo": "../../public/stocksicon/TitanCompany.webp",
                    "companyname": "Titan Company",
                    "price": "₹3,220",
                    "percentage": "4.20 (1.40%)",
                    "marketcap": "₹2,90,000 Cr",
                    "trend": true
                },
                {
                    "id": 19,
                    "cat": "small",
                    "logo": "../../public/stocksicon/mirae_groww.webp",
                    "companyname": "Nykaa",
                    "price": "₹285",
                    "percentage": "-4.20 (-2.50%)",
                    "marketcap": "₹65,000 Cr",
                    "trend": false
                },
                {
                    "id": 20,
                    "cat": "small",
                    "logo": "../../public/stocksicon/One97-Communications-Ltd.webp",
                    "companyname": "Paytm",
                    "price": "₹600",
                    "percentage": "8.10 (1.75%)",
                    "marketcap": "₹50,000 Cr",
                    "trend": true
                },
                {
                    "id": 21,
                    "cat": "small",
                    "logo": "../../public/stocksicon/AvenueSupermartsLtd.webp",
                    "companyname": "Avenue Supermart",
                    "price": "₹4,150",
                    "percentage": "-10.25 (-0.92%)",
                    "marketcap": "₹3,20,000 Cr",
                    "trend": false
                },
                {
                    "id": 22,
                    "cat": "small",
                    "logo": "../../public/stocksicon/BritanniaInds.webp",
                    "companyname": "Britannia Industries",
                    "price": "₹4,750",
                    "percentage": "12.50 (1.40%)",
                    "marketcap": "₹1,20,000 Cr",
                    "trend": true
                },
                {
                    "id": 23,
                    "cat": "small",
                    "logo": "../../public/stocksicon/BhartiAirtel.webp",
                    "companyname": "Bharti Airtel",
                    "price": "₹1,100",
                    "percentage": "-2.80 (-0.95%)",
                    "marketcap": "₹5,30,000 Cr",
                    "trend": false
                },
                {
                    "id": 24,
                    "cat": "small",
                    "logo": "../../public/stocksicon/LTIMindtreeLtd.webp",
                    "companyname": "LTIMindtree",
                    "price": "₹5,290",
                    "percentage": "6.30 (1.20%)",
                    "marketcap": "₹1,85,000 Cr",
                    "trend": true
                }
            ],
            "future_option":[
                {
                    "id": 1,
                    "cat": "futures",
                    "logo": "./../public/stocksicon/HDFCBank.webp",
                    "companyname": "Nifty 50",
                    "price": "₹22,100",
                    "open": "₹22,150",
                    "close": "₹22,100",
                    "percentage": "-45.60 (-0.21%)",
                    "marketcap": "N/A",
                    "return": "-0.21%",
                    "trend": false
                },
                {
                    "id": 2,
                    "cat": "futures",
                    "logo": "./../public/stocksicon/HDFCBank.webp",
                    "companyname": "Bank Nifty",
                    "price": "₹46,750",
                    "open": "₹46,600",
                    "close": "₹46,750",
                    "percentage": "150.20 (0.32%)",
                    "marketcap": "N/A",
                    "return": "0.32%",
                    "trend": true
                },
                {
                    "id": 3,
                    "cat": "options",
                    "logo": "../../public/stocksicon/TataMotors.webp",
                    "companyname": "Tata Consultancy Services",
                    "price": "₹3,950",
                    "open": "₹3,942",
                    "close": "₹3,950",
                    "percentage": "8.50 (0.22%)",
                    "marketcap": "₹14,80,000 Cr",
                    "return": "0.22%",
                    "trend": true
                },
                {
                    "id": 4,
                    "cat": "options",
                    "logo": "../../public/stocksicon/Infosys.webp",
                    "companyname": "Infosys Ltd",
                    "price": "₹1,530",
                    "open": "₹1,540",
                    "close": "₹1,530",
                    "percentage": "-10.20 (-0.66%)",
                    "marketcap": "₹6,40,000 Cr",
                    "return": "-0.66%",
                    "trend": false
                },
                {
                    "id": 5,
                    "cat": "futures",
                    "logo": "../../public/stocksicon/HDFCBank.webp",
                    "companyname": "HDFC Bank",
                    "price": "₹1,675",
                    "open": "₹1,660",
                    "close": "₹1,675",
                    "percentage": "15.75 (0.95%)",
                    "marketcap": "₹12,60,000 Cr",
                    "return": "0.95%",
                    "trend": true
                },
                {
                    "id": 6,
                    "cat": "options",
                    "logo": "../../public/stocksicon/ICICIBank.webp",
                    "companyname": "ICICI Bank",
                    "price": "₹1,080",
                    "open": "₹1,083",
                    "close": "₹1,080",
                    "percentage": "-3.20 (-0.30%)",
                    "marketcap": "₹6,30,000 Cr",
                    "return": "-0.30%",
                    "trend": false
                },
                {
                    "id": 7,
                    "cat": "futures",
                    "logo": "../../public/stocksicon/RelianceInds.webp",
                    "companyname": "Reliance Industries",
                    "price": "₹2,680",
                    "open": "₹2,660",
                    "close": "₹2,680",
                    "percentage": "20.50 (0.77%)",
                    "marketcap": "₹17,80,000 Cr",
                    "return": "0.77%",
                    "trend": true
                },
                {
                    "id": 8,
                    "cat": "options",
                    "logo": "../../public/stocksicon/StBkofIndia.webp",
                    "companyname": "State Bank of India",
                    "price": "₹615",
                    "open": "₹620",
                    "close": "₹615",
                    "percentage": "-6.25 (-1.00%)",
                    "marketcap": "₹5,50,000 Cr",
                    "return": "-1.00%",
                    "trend": false
                },
                {
                    "id": 9,
                    "cat": "futures",
                    "logo": "../../public/stocksicon/AdaniEnterp.webp",
                    "companyname": "Adani Enterprises",
                    "price": "₹2,280",
                    "open": "₹2,250",
                    "close": "₹2,280",
                    "percentage": "25.80 (1.14%)",
                    "marketcap": "₹2,70,000 Cr",
                    "return": "1.14%",
                    "trend": true
                },
                {
                    "id": 10,
                    "cat": "options",
                    "logo": "../../public/stocksicon/TataMotors.webp",
                    "companyname": "Tata Motors",
                    "price": "₹740",
                    "open": "₹745",
                    "close": "₹740",
                    "percentage": "-5.10 (-0.68%)",
                    "marketcap": "₹3,00,000 Cr",
                    "return": "-0.68%",
                    "trend": false
                },
                {
                    "id": 11,
                    "cat": "futures",
                    "logo": "../../public/stocksicon/ZomatoLtd.webp",
                    "companyname": "Zomato Ltd",
                    "price": "₹152",
                    "open": "₹148",
                    "close": "₹152",
                    "percentage": "4.50 (3.05%)",
                    "marketcap": "₹1,25,000 Cr",
                    "return": "3.05%",
                    "trend": true
                },
                {
                    "id": 12,
                    "cat": "options",
                    "logo": "../../public/stocksicon/AxisBank.webp",
                    "companyname": "Axis Bank",
                    "price": "₹1,075",
                    "open": "₹1,082",
                    "close": "₹1,075",
                    "percentage": "-7.40 (-0.69%)",
                    "marketcap": "₹4,50,000 Cr",
                    "return": "-0.69%",
                    "trend": false
                },
                {
                    "id": 13,
                    "cat": "futures",
                    "logo": "../../public/stocksicon/HindUnilever.webp",
                    "companyname": "Hindustan Unilever",
                    "price": "₹2,320",
                    "open": "₹2,310",
                    "close": "₹2,320",
                    "percentage": "18.90 (0.82%)",
                    "marketcap": "₹5,80,000 Cr",
                    "return": "0.82%",
                    "trend": true
                },
                {
                    "id": 14,
                    "cat": "options",
                    "logo": "../../public/stocksicon/MarutiSuzuki.webp",
                    "companyname": "Maruti Suzuki",
                    "price": "₹11,820",
                    "open": "₹11,860",
                    "close": "₹11,820",
                    "percentage": "-50.60 (-0.43%)",
                    "marketcap": "₹3,80,000 Cr",
                    "return": "-0.43%",
                    "trend": false
                },
                {
                    "id": 15,
                    "cat": "futures",
                    "logo": "../../public/stocksicon/BhartiAirtel.webp",
                    "companyname": "Bharti Airtel",
                    "price": "₹1,270",
                    "open": "₹1,260",
                    "close": "₹1,270",
                    "percentage": "9.75 (0.78%)",
                    "marketcap": "₹6,20,000 Cr",
                    "return": "0.78%",
                    "trend": true
                }
            ],
            "popular_funds":[
                {
                    "id": 1,
                    "logo": "../../public/stocksicon/sbi_groww.webp",
                    "fund_name": "SBI Bluechip Fund",
                    "category": "Large Cap",
                    "nav": "₹78.45",
                    "one_year_return": "18.75%",
                    "five_year_return": "12.30%",
                    "expense_ratio": "0.85%",
                    "risk": "Moderate"
                },
                {
                    "id": 2,
                    "logo": "../../public/stocksicon/hdfc_groww.webp",
                    "fund_name": "HDFC Index Fund - Nifty 50",
                    "category": "Index Fund",
                    "nav": "₹260.30",
                    "one_year_return": "19.10%",
                    "five_year_return": "13.90%",
                    "expense_ratio": "0.20%",
                    "risk": "Moderate"
                },
                {
                    "id": 3,
                    "logo": "../../public/stocksicon/reliance_groww.png",
                    "fund_name": "Nippon India Small Cap Fund",
                    "category": "Small Cap",
                    "nav": "₹145.80",
                    "one_year_return": "32.50%",
                    "five_year_return": "18.45%",
                    "expense_ratio": "1.00%",
                    "risk": "High"
                },
                {
                    "id": 4,
                    "logo": "../../public/stocksicon/icici_groww.webp",
                    "fund_name": "ICICI Prudential Value Discovery Fund",
                    "category": "Value Fund",
                    "nav": "₹200.25",
                    "one_year_return": "16.80%",
                    "five_year_return": "11.65%",
                    "expense_ratio": "1.10%",
                    "risk": "Moderate"
                },
                {
                    "id": 5,
                    "logo": "../../public/stocksicon/uti_groww.png",
                    "fund_name": "UTI Nifty 50 Index Fund",
                    "category": "Index Fund",
                    "nav": "₹210.75",
                    "one_year_return": "18.90%",
                    "five_year_return": "13.50%",
                    "expense_ratio": "0.25%",
                    "risk": "Moderate"
                },
                {
                    "id": 6,
                    "logo": "../../public/stocksicon/axis_groww.webp",
                    "fund_name": "Axis Small Cap Fund",
                    "category": "Small Cap",
                    "nav": "₹79.30",
                    "one_year_return": "29.80%",
                    "five_year_return": "17.60%",
                    "expense_ratio": "0.95%",
                    "risk": "High"
                },
                {
                    "id": 7,
                    "logo": "../../public/stocksicon/mirae_groww.webp",
                    "fund_name": "Mirae Asset Emerging Bluechip Fund",
                    "category": "Mid Cap",
                    "nav": "₹125.65",
                    "one_year_return": "22.40%",
                    "five_year_return": "15.75%",
                    "expense_ratio": "0.85%",
                    "risk": "Moderate-High"
                },
                {
                    "id": 8,
                    "logo": "../../public/stocksicon/hdfc_groww.webp",
                    "fund_name": "HDFC Mid-Cap Opportunities Fund",
                    "category": "Mid Cap",
                    "nav": "₹90.45",
                    "one_year_return": "21.20%",
                    "five_year_return": "14.30%",
                    "expense_ratio": "0.90%",
                    "risk": "Moderate-High"
                },
                {
                    "id": 9,
                    "logo": "../../public/stocksicon/icici_groww.webp",
                    "fund_name": "ICICI Prudential Bluechip Fund",
                    "category": "Large Cap",
                    "nav": "₹83.90",
                    "one_year_return": "17.20%",
                    "five_year_return": "12.10%",
                    "expense_ratio": "0.88%",
                    "risk": "Moderate"
                },
                {
                    "id": 10,
                    "logo": "../../public/stocksicon/ppfas_groww.webp",
                    "fund_name": "Parag Parikh Flexi Cap Fund",
                    "category": "Flexi Cap",
                    "nav": "₹85.25",
                    "one_year_return": "19.80%",
                    "five_year_return": "14.40%",
                    "expense_ratio": "0.75%",
                    "risk": "Moderate"
                },
                {
                    "id": 11,
                    "logo": "../../public/stocksicon/tata_groww.webp",
                    "fund_name": "Tata Equity P/E Fund",
                    "category": "Value Fund",
                    "nav": "₹64.50",
                    "one_year_return": "16.50%",
                    "five_year_return": "11.30%",
                    "expense_ratio": "1.05%",
                    "risk": "Moderate"
                },
                {
                    "id": 12,
                    "logo": "../../public/stocksicon/motilal_groww.webp",
                    "fund_name": "Motilal Oswal Nasdaq 100 ETF",
                    "category": "Index Fund",
                    "nav": "₹132.40",
                    "one_year_return": "26.50%",
                    "five_year_return": "18.90%",
                    "expense_ratio": "0.55%",
                    "risk": "High"
                },
                {
                    "id": 13,
                    "logo": "../../public/stocksicon/LarsenToubro.webp",
                    "fund_name": "L&T Emerging Businesses Fund",
                    "category": "Small Cap",
                    "nav": "₹60.90",
                    "one_year_return": "31.90%",
                    "five_year_return": "19.20%",
                    "expense_ratio": "0.98%",
                    "risk": "High"
                },
                {
                    "id": 14,
                    "logo": "../../public/stocksicon/kotak_groww.webp",
                    "fund_name": "Kotak Standard Multicap Fund",
                    "category": "Multi Cap",
                    "nav": "₹142.30",
                    "one_year_return": "18.30%",
                    "five_year_return": "13.00%",
                    "expense_ratio": "0.78%",
                    "risk": "Moderate"
                },
                {
                    "id": 15,
                    "logo": "../../public/stocksicon/StBkofIndia.webp",
                    "fund_name": "SBI Nifty Next 50 Index Fund",
                    "category": "Index Fund",
                    "nav": "₹180.50",
                    "one_year_return": "22.60%",
                    "five_year_return": "14.80%",
                    "expense_ratio": "0.40%",
                    "risk": "Moderate"
                },
                {
                    "id": 16,
                    "logo": "../../public/stocksicon/franklin_groww.webp",
                    "fund_name": "Franklin India Smaller Companies Fund",
                    "category": "Small Cap",
                    "nav": "₹52.80",
                    "one_year_return": "28.90%",
                    "five_year_return": "17.20%",
                    "expense_ratio": "1.02%",
                    "risk": "High"
                },
                {
                    "id": 17,
                    "logo": "../../public/stocksicon/dsp_groww.webp",
                    "fund_name": "DSP Mid Cap Fund",
                    "category": "Mid Cap",
                    "nav": "₹110.35",
                    "one_year_return": "20.80%",
                    "five_year_return": "15.00%",
                    "expense_ratio": "0.85%",
                    "risk": "Moderate-High"
                },
                {
                    "id": 18,
                    "logo": "../../public/stocksicon/invesco_groww.webp",
                    "fund_name": "Invesco India Flexi Cap Fund",
                    "category": "Flexi Cap",
                    "nav": "₹73.25",
                    "one_year_return": "18.50%",
                    "five_year_return": "13.70%",
                    "expense_ratio": "0.72%",
                    "risk": "Moderate"
                }
            ]
        },
        "forex_data":{
            "forex_indices":[
                {
                    "id": 1,
                    "indices": "NASDAQ",
                    "opening": "17,911.50",
                    "percentage": "0.40 (1.5%)",
                    "trend": true
                },
                {
                    "id": 2,
                    "indices": "NIKKEI",
                    "opening": "37,076.23",
                    "percentage": "-0.30 (-0.8%)",
                    "trend": false
                },
                {
                    "id": 3,
                    "indices": "HANG SENG",
                    "opening": "17,911.50",
                    "percentage": "0.10 (0.5%)",
                    "trend": true
                },
                {
                    "id": 4,
                    "indices": "DAX",
                    "opening": "17,911.50",
                    "percentage": "0.75 (2.1%)",
                    "trend": true
                },
                {
                    "id": 5,
                    "indices": "FTSE",
                    "opening": "17,911.50",
                    "percentage": "-0.50 (-1.2%)",
                    "trend": false
                }
            ],
            "forex_stocks":[
                {
                    "id": 1,
                    "cat": "large",
                    "logo": "../../public/stocksicon/amazon.webp",
                    "companyname": "Amazon",
                    "price": "$3,250",
                    "percentage": "1.20 (0.37%)",
                    "marketcap": "$1.65T",
                    "trend": true
                },
                {
                    "id": 2,
                    "cat": "large",
                    "logo": "../../public/stocksicon/google.jpeg",
                    "companyname": "Google",
                    "price": "$2,850",
                    "percentage": "-0.50 (-0.18%)",
                    "marketcap": "$1.87T",
                    "trend": false
                },
                {
                    "id": 3,
                    "cat": "large",
                    "logo": "../../public/stocksicon/tesla.jpg",
                    "companyname": "Tesla",
                    "price": "$950",
                    "percentage": "3.50 (0.37%)",
                    "marketcap": "$880B",
                    "trend": true
                },
                {
                    "id": 4,
                    "cat": "large",
                    "logo": "../../public/stocksicon/apple.jpeg",
                    "companyname": "Apple",
                    "price": "$170",
                    "percentage": "-0.75 (-0.44%)",
                    "marketcap": "$2.75T",
                    "trend": false
                },
                {
                    "id": 5,
                    "cat": "large",
                    "logo": "../../public/stocksicon/microsoft.png",
                    "companyname": "Microsoft",
                    "price": "$320",
                    "percentage": "2.10 (0.66%)",
                    "marketcap": "$2.85T",
                    "trend": true
                },
                {
                    "id": 6,
                    "cat": "large",
                    "logo": "../../public/stocksicon/nvidia.jpeg",
                    "companyname": "Nvidia",
                    "price": "$680",
                    "percentage": "-1.50 (-0.22%)",
                    "marketcap": "$1.70T",
                    "trend": false
                },
                {
                    "id": 7,
                    "cat": "large",
                    "logo": "../../public/stocksicon/meta.webp",
                    "companyname": "Meta (Facebook)",
                    "price": "$420",
                    "percentage": "4.20 (1.01%)",
                    "marketcap": "$1.20T",
                    "trend": true
                },
                {
                    "id": 8,
                    "cat": "large",
                    "logo": "../../public/stocksicon/netflix.jpg",
                    "companyname": "Netflix",
                    "price": "$510",
                    "percentage": "-2.10 (-0.41%)",
                    "marketcap": "$220B",
                    "trend": false
                },
                {
                    "id": 9,
                    "cat": "large",
                    "logo": "../../public/stocksicon/Adobe.png",
                    "companyname": "Adobe",
                    "price": "$580",
                    "percentage": "3.00 (0.52%)",
                    "marketcap": "$270B",
                    "trend": true
                },
                {
                    "id": 10,
                    "cat": "large",
                    "logo": "../../public/stocksicon/intel.jpg",
                    "companyname": "Intel",
                    "price": "$45",
                    "percentage": "-0.40 (-0.89%)",
                    "marketcap": "$190B",
                    "trend": false
                },
                {
                    "id": 11,
                    "cat": "large",
                    "logo": "../..T/public/stocksicon/sumsang.webp",
                    "companyname": "Samsung",
                    "price": "$68",
                    "percentage": "0.50 (0.74%)",
                    "marketcap": "$450B",
                    "trend": true
                },
                {
                    "id": 12,
                    "cat": "large",
                    "logo": "../../public/stocksicon/amd.jpeg",
                    "companyname": "AMD",
                    "price": "$125",
                    "percentage": "-1.20 (-0.95%)",
                    "marketcap": "$180B",
                    "trend": false
                },
                {
                    "id": 13,
                    "cat": "large",
                    "logo": "../../public/stocksicon/tencent.jpeg",
                    "companyname": "Tencent",
                    "price": "$55",
                    "percentage": "0.90 (1.67%)",
                    "marketcap": "$500B",
                    "trend": true
                },
                {
                    "id": 14,
                    "cat": "large",
                    "logo": "../../public/stocksicon/alibaba.jpeg",
                    "companyname": "Alibaba",
                    "price": "$88",
                    "percentage": "-0.80 (-0.91%)",
                    "marketcap": "$240B",
                    "trend": false
                },
                {
                    "id": 15,
                    "cat": "large",
                    "logo": "../../public/stocksicon/sony.webp",
                    "companyname": "Sony",
                    "price": "$100",
                    "percentage": "1.50 (1.52%)",
                    "marketcap": "$130B",
                    "trend": true
                },
                {
                    "id": 16,
                    "cat": "large",
                    "logo": "../../public/stocksicon/paypal.jpeg",
                    "companyname": "Paypal",
                    "price": "$82",
                    "percentage": "-0.60 (-0.72%)",
                    "marketcap": "$90B",
                    "trend": false
                },
                {
                    "id": 17,
                    "cat": "large",
                    "logo": "../../public/stocksicon/ppfas_groww.webp",
                    "companyname": "TSMC",
                    "price": "$105",
                    "percentage": "2.20 (2.14%)",
                    "marketcap": "$550B",
                    "trend": true
                },
                {
                    "id": 18,
                    "cat": "large",
                    "logo": "../../public/stocksicon/visa.webp",
                    "companyname": "Visa",
                    "price": "$245",
                    "percentage": "-1.10 (-0.45%)",
                    "marketcap": "$510B",
                    "trend": false
                }
            ],
            "forex_commodities":[
                {
                    "id": 1,
                    "commodity": "Gold",
                    "logo": "../../public/stocksicon/gold.webp",
                    "price": "$2,350",
                    "percentage": "1.20 (0.51%)",
                    "marketcap": "$12.5T",
                    "trend": true
                },
                {
                    "id": 2,
                    "commodity": "Silver",
                    "logo": "../../public/stocksicon/silver.jpeg",
                    "price": "$29.10",
                    "percentage": "-0.35 (-1.19%)",
                    "marketcap": "$1.3T",
                    "trend": false
                },
                {
                    "id": 3,
                    "commodity": "Crude Oil (WTI)",
                    "logo": "../../public/stocksicon/oil.jpeg",
                    "price": "$78.40",
                    "percentage": "0.90 (1.16%)",
                    "marketcap": "$7.8T",
                    "trend": true
                },
                {
                    "id": 4,
                    "commodity": "Brent Oil",
                    "logo": "../../public/stocksicon/b oil.webp",
                    "price": "$82.30",
                    "percentage": "-1.10 (-1.32%)",
                    "marketcap": "$8.3T",
                    "trend": false
                },
                {
                    "id": 5,
                    "commodity": "Natural Gas",
                    "logo": "../../public/stocksicon/n gas.jpg",
                    "price": "$2.95",
                    "percentage": "0.15 (5.36%)",
                    "marketcap": "$1.1T",
                    "trend": true
                },
                {
                    "id": 6,
                    "commodity": "Copper",
                    "logo": "../../public/stocksicon/copper.webp",
                    "price": "$4.10",
                    "percentage": "-0.05 (-1.20%)",
                    "marketcap": "$0.95T",
                    "trend": false
                },
                {
                    "id": 7,
                    "commodity": "Platinum",
                    "logo": "../../public/stocksicon/platinam.jpeg",
                    "price": "$1,150",
                    "percentage": "3.20 (0.28%)",
                    "marketcap": "$0.70T",
                    "trend": true
                },
                {
                    "id": 8,
                    "commodity": "Palladium",
                    "logo": "../../public/stocksicon/palladium.webp",
                    "price": "$1,890",
                    "percentage": "-6.50 (-0.34%)",
                    "marketcap": "$0.50T",
                    "trend": false
                },
                {
                    "id": 9,
                    "commodity": "Aluminum",
                    "logo": "../../public/stocksicon/aluminium.jpg",
                    "price": "$2,650",
                    "percentage": "8.20 (0.31%)",
                    "marketcap": "$0.85T",
                    "trend": true
                },
                {
                    "id": 10,
                    "commodity": "Wheat",
                    "logo": "../../public/stocksicon/wheat.avif",
                    "price": "$6.75",
                    "percentage": "-0.12 (-1.75%)",
                    "marketcap": "$0.40T",
                    "trend": false
                },
                {
                    "id": 11,
                    "commodity": "Corn",
                    "logo": "../../public/stocksicon/corn.jpeg",
                    "price": "$5.85",
                    "percentage": "0.10 (1.74%)",
                    "marketcap": "$0.35T",
                    "trend": true
                },
                {
                    "id": 12,
                    "commodity": "Coffee",
                    "logo": "../../public/stocksicon/coffe.jpg",
                    "price": "$2.35",
                    "percentage": "-0.08 (-3.29%)",
                    "marketcap": "$0.25T",
                    "trend": false
                }
            ]
        }
    }
]

const indice = [
    {
        "id":1,
        "indices": "NIFTY 50",
        "opening": "22,497.90",
        "percentage": "3.60 (0.17%)",
        "trend":false
    },
    {
        "id":2,
        "indices": "BANKNIFTY",
        "opening": "47,889.25",
        "percentage": "37.11 (0.11%)",
        "trend":true
    },
    {
        "id":3, 
        "indices": "SENSEX",
        "opening": "74,117.02",
        "percentage": "1.05 (0.00%)",
        "trend":false
    },
    {
        "id":4,
        "indices": "FINNIFTY",
        "opening": "23,400.45",
        "percentage": "0.40 (90%)",
        "trend":true
    },
    {
        "id":6,
        "indices": "MIDCAP NIFTY",
        "opening": "11,011.01",
        "percentage": "51.60 (0.47%)",
        "trend":false
    }
]

const mtrade = [
    {
        "id":1,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)",
        "trend":true
    },
    {
        "id":2,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)",
        "trend":false
    },
    {
        "id":3,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)",
        "trend":false
    },
    {
        "id":4,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)",
        "trend":true
    },
    ,
    {
        "id":5,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)",
        "trend":false
    }
    ,
    {
        "id":6,
        "logo":"../../public/stocksicon/Adani.webp",
        "companyname":"Adani Groups",
        "price":"₹500",
        "percentage": "0.40 (90%)",
        "trend":true
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
    const [toploser,setToploser] = useState("large")
    const [fando,setFando] =useState("futures")
    const [currency, setCurrency] = useState("major")
    const [show,setShow] = useState(false)
    const [showall,setShowall] = useState(false)
    const [tableshowall,settableshowall] = useState(false)
    const [showfunds,setShowfunds] =useState(false)
    const [fstockshow,setFstockshow] =useState(false)
    const [fcommodityshow,setFcommodityshow] =useState(false)

    function toggle(){
        setShow(!show)
        console.log(show)
    }
    function toggleone(){
        setShowall(!showall)
    }
    function toggletwo(){
        settableshowall(!tableshowall)
    }
    function togglethree(){
        setShowfunds(!showfunds)
    }
    function togglefour(){
        setFstockshow(!fstockshow)
    }
    function togglefive(){
        setFcommodityshow(!fcommodityshow)
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
                            <div className="stock-content">
                                    {dataset?.map((item,index) => (
                                        <div style={{display:"flex",gap:"15px"}} key={item.market_data.indian_indices[0]?.id}>
                                            {item.market_data.indian_indices.map((indexitem) => (
                                                <div className="s-indices" key={indexitem.id} onMouseEnter={() => {setShown(indexitem.id)}} onMouseLeave={() => {setShown(null)}}>
                                                    <div>
                                                        <div className='in-item'>{indexitem.indices}</div>
                                                        <div className='in-item'>{indexitem.opening} <span style={{color: `${indexitem.trend ? "#00B386" : "#EB5B3C"}`,marginLeft:"5px"}}>{indexitem.percentage}</span></div>
                                                    </div>
                                                    { shown === indexitem.id && (
                                                        <div className='dot'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{width:"16px",height:"16px"}}><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                            </div>
                            <div className="most-trade">
                                <div style={{display:"flex"}}>
                                    <div className='mt-head'  style={{flex:"1"}}>Most traded on TradeGalaxy</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}> <button className='mt-head-btn' onClick={toggle}>{show ? "See less" : "See more"}</button></div>
                                </div>
                                <div className="c-trade">
                                    {dataset?.map((item) => (
                                        <div style={{display:"flex",gap:"15px",flexWrap:"wrap"}} key={item.market_data.indian_stocks[0]?.id}>
                                            {item.market_data.indian_stocks.slice(0,show ? item.market_data.indian_stocks.length : 6).map((indexitem) => (
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="top-gainers">
                                <div style={{display:"flex"}}>
                                    <div className='tg-head'  style={{flex:"1"}}>Top Gainers</div>
                                    <div className='tg-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal",marginTop:"70px"}}><button className='mt-head-btn' onClick={toggleone}>{showall ? "See less" : "See more"}</button></div>
                                </div>
                                <div className='tg-cat' style={{marginBottom:"20px"}}>
                                    <div><button onClick={() => {setTopgainer("large")}}>Large</button></div>
                                    <div><button onClick={() => {setTopgainer("mid")}}>Mid</button></div>
                                    <div><button onClick={() => {setTopgainer("small")}}>Small</button></div>
                                </div>
                                <div className="large-trade">
                                    {dataset?.map((item) => (
                                        <div style={{display:"flex",gap:"15px",flexWrap:"wrap"}} key={item.market_data.indian_stocks[0]?.id}>
                                            {item.market_data.indian_stocks.slice(0,showall ? item.market_data.indian_stocks.length : 6).map((indexitem) => (
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
                                                        <div className="large-trade-per" style={{color:`${indexitem.trend ? "#00B386" : "#EB5B3C"}`}}>{indexitem.percentage}</div>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="top-loser">
                                <div style={{display:"flex"}}>
                                    <div className='tg-head'  style={{flex:"1"}}>Top Losers</div>
                                    <div className='tg-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal",marginTop:"70px"}}><button className='mt-head-btn' onClick={toggleone}>{showall ? "See less" : "See more"}</button></div>
                                </div>
                                <div className='tg-cat' style={{marginBottom:"20px"}}>
                                    <div><button onClick={() => {setToploser("large")}}>Large</button></div>
                                    <div><button onClick={() => {setToploser("mid")}}>Mid</button></div>
                                    <div><button onClick={() => {setToploser("small")}}>Small</button></div>
                                </div>
                                <div className="large-trade">
                                    {dataset?.map((item) => (
                                        <div style={{display:"flex",gap:"15px",flexWrap:"wrap"}} key={item.market_data.indian_stocks[0]?.id}>
                                            {item.market_data.indian_stocks.slice(0,showall ? item.market_data.indian_stocks.length : 6).map((indexitem) => (
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
                                                        <div className="large-trade-per" style={{color:`${indexitem.trend ? "#00B386" : "#EB5B3C"}`}}>{indexitem.percentage}</div>
                                                    </div>
                                                )
                                            ))}
                                        </div>
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
                                        {dataset?.map((item) => (
                                            item.market_data.future_option.slice(0,tableshowall ? item.market_data.indian_stocks.length : 5).map((indexitem) => (
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
                                            ))
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
                                <div className="c-trade">
                                    {dataset?.map((item) => (
                                        <div style={{display:"flex",gap:"15px",flexWrap:"wrap"}} key={item.market_data.popular_funds[0].id}>
                                            {item.market_data.popular_funds.slice(0,showfunds ? item.market_data.popular_funds.length : 6).map((indexitem) => (
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
                            <div className="stock-content">
                                    {dataset?.map((item) => (
                                        <div style={{display:"flex",gap:"15px"}} key={item.forex_data.forex_indices[0].id}>
                                            {item.forex_data.forex_indices.map((indexitem) => (
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
                                    ))}
                            </div>
                            <div className="most-trade">
                                <div style={{display:"flex"}}>
                                    <div className='mt-head'  style={{flex:"1"}}>Most Popular Stocks</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}><button className='mt-head-btn' onClick={togglefour}>{fstockshow ? "See less" : "See more"}</button></div>
                                </div>
                                <div className="c-trade">
                                    {dataset?.map((item) => (
                                        <div style={{display:"flex",gap:"15px",flexWrap:"wrap"}}  key={item.forex_data.forex_stocks[0].id}>
                                            {item.forex_data.forex_stocks.slice(0,fstockshow ? item.forex_data.forex_stocks.length : 6).map((indexitem) => (
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
                                    ))}
                                </div>
                            </div>
                            <div className="most-trade">
                                <div style={{display:"flex"}}>
                                    <div className='mt-head'  style={{flex:"1"}}>Commodities</div>
                                    <div className='mt-head' style={{flex:"1",textAlign:"end",fontSize:"14px",color:"teal"}}><button className='mt-head-btn' onClick={togglefive}>{fcommodityshow ? "See less" : "See more"}</button></div>
                                </div>
                                <div className="c-trade">
                                    {dataset?.map((item) => (
                                        <div style={{display:"flex",gap:"15px",flexWrap:"wrap"}} key={item.forex_data.forex_commodities[0].id}>
                                            {item.forex_data.forex_commodities.slice(0,fcommodityshow ? item.forex_data.forex_commodities.length : 6).map((indexitem) => (
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