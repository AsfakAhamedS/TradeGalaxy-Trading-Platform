const server =  require('express')
const {MongoClient} = require('mongodb')
const app = server()
const cors = require('cors')
const port = 4500
const uri = "mongodb://127.0.0.1:27017/"
const jwt = require("jsonwebtoken");
app.use(server.json())
app.use(cors())
require("dotenv").config();

const JWT_SECRET=process.env.JWT_TOKEN||"sample";
async function getCollection(dbName, collectionName) {
    const client = new MongoClient(uri, { monitorCommands: true });
    await client.connect();
    console.log("MongoDB connected");
    const db = client.db(dbName);
    return { client, collection: db.collection(collectionName) };
}

app.post('/getuserlogindata', async(req,res) => {
    try{
        const {email,password} = req.body
        if(!email || !password){
            res.status(401).send("Email or Password are required")
            return
        }
        const {client,collection} = await getCollection("TradeGalaxy","user")
        const result = await collection.find({email,password}).toArray()
        await client.close()
        if(!result.length>0 ){
            res.status(401).send("Invalid Email and Password")
            return
        }
        console.log(result)
        const token = jwt.sign({ id: result._id, email: result.email }, JWT_SECRET, { expiresIn: "7h" });
        console.log(token)
        res.status(200).send(token)
    }catch(e){
        console.log(e)
    }
})

app.post('/createuserdata', async(req,res) => {
    try{
        const {name,email,password,phone} = req.body
        if(!name || !email || !password || !phone){
            res.status(401).send('All fields are required')
            return
        }
        const {client,collection} = await getCollection("TradeGalaxy","user")
        const username = await collection.find({name}).toArray()
        const useremail = await collection.find({email}).toArray()
        const userphone = await collection.find({phone}).toArray()
        if(username.length > 0){
            res.status(401).send('This name already exists')
            return
        }
        if(useremail.length > 0){
            res.status(401).send('This email already exists')
            return
        }
        if(userphone.length > 0){
            res.status(401).send('This phone number already exists')
            return
        }
        const clientcode = "ClientCode" + Date.now()
        const demataccno = Date.now()
        const result = await collection.insertOne({
            name: name,
            email: email,
            password: password,
            phone:phone,
            uniqueclientcode:clientcode,
            demataccno:demataccno,
            balance:0,
            transactions:[]
        })
        await client.close()
        res.status(200).send("Success")
    }catch(e){
        console.log(e)
    }
})

app.post("/getuserdata", async (req, res) => {
    try {
        const { token,email } = req.body
        console.log(token)
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "user")
        const user = await collection.findOne({email:email})
        if (!user || user.length === 0) {
            return res.status(404).send("No data found")
        }
        res.status(200).send(user)
        console.log(user)
        await client.close()
    } catch (e) {
        console.error("Error:", e)
        res.status(500).send("Server error")
    }
})

app.post("/getmarketdata", async (req, res) => {
    try {
        const { token } = req.body
        console.log(token)
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "marketdata")
        const result = await collection.find().toArray()
        if (!result || result.length === 0) {
            return res.status(404).send("No data found")
        }
        // console.log("All data:", result)
        const indian_indices = result.flatMap(item => item?.market_data?.indian_indices || [])
        const indian_stocks = result.flatMap(item => item?.market_data?.indian_stocks || []).slice(0,6)
        const indian_stocks_all = result.flatMap(item => item?.market_data?.indian_stocks || [])
        const largecap = indian_stocks_all.filter(item => 
            item.cat.includes("large")
        ).slice(0,6)
        const midcap = indian_stocks_all.filter(item => 
            item.cat.includes("mid")
        ).slice(0,6)
        const smallcap = indian_stocks_all.filter(item => 
            item.cat.includes("small")
        ).slice(0,6)
        const future_option = result.flatMap(item => item?.market_data?.future_option || [])
        const future = future_option.filter(item => 
            item.cat.includes("futures")
        ).slice(0,3)
        const option = future_option.filter(item => 
            item.cat.includes("options")
        ).slice(0,3)
        const popular_funds = result.flatMap(item => item?.market_data?.popular_funds || []).slice(0,6)
        const forex_indices = result.flatMap(item => item?.forex_data?.forex_indices || [])
        const forex_stocks = result.flatMap(item => item?.forex_data?.forex_stocks || []).slice(0,6)
        const commodities = result.flatMap(item => item?.forex_data?.forex_commodities || []).slice(0,6)
        const forex_currency = result.flatMap(item => item?.forex_data?.forex_currency || [])
        const major = forex_currency.filter(item => 
            item.cat.includes("major")
        ).slice(0,3)
        const minor = forex_currency.filter(item => 
            item.cat.includes("minor")
        ).slice(0,3)
        const exotic = forex_currency.filter(item => 
            item.cat.includes("exotic")
        ).slice(0,3)
        
        const data = [
            indian_indices,
            indian_stocks,
            [...largecap,...midcap,...smallcap],
            [...future,...option],
            popular_funds,
            forex_indices,
            forex_stocks,
            commodities,
            [...major,...minor,...exotic]
        ]
        res.status(200).send(data)
        await client.close()
    } catch (e) {
        console.error("Error:", e)
        res.status(500).send("Server error")
    }
})

app.post("/getfullstockdata", async (req, res) => {
    try {
        const { token } = req.body
        console.log(token)
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "marketdata")
        const result = await collection.find().toArray()
        if (!result || result.length === 0) {
            return res.status(404).send("No data found")
        }
        const indian_stocks = result.flatMap(item => item?.market_data?.indian_stocks || [])
        if (!indian_stocks || indian_stocks.length === 0) {
            return res.status(404).send("No data found")
        }

        res.status(200).send(indian_stocks)
        await client.close()
    } catch (e) {
        console.error("Error:", e)
        res.status(500).send("Server error")
    }
})

app.post("/getallpopularfunds", async (req, res) => {
    try {
        const { token } = req.body
        console.log(token)
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "marketdata")
        const result = await collection.find().toArray()
        if (!result || result.length === 0) {
            return res.status(404).send("No data found")
        }
        const popular_funds = result.flatMap(item => item?.market_data?.popular_funds || [])
        if (!popular_funds || popular_funds.length === 0) {
            return res.status(404).send("No data found")
        }

        res.status(200).send(popular_funds)
        await client.close()
    } catch (e) {
        console.error("Error:", e)
        res.status(500).send("Server error")
    }
})

app.post("/getallforexstock", async (req, res) => {
    try {
        const { token } = req.body
        console.log(token)
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "marketdata")
        const result = await collection.find().toArray()
        if (!result || result.length === 0) {
            return res.status(404).send("No data found")
        }
        const forex_stocks = result.flatMap(item => item?.forex_data?.forex_stocks || [])
        if (!forex_stocks || forex_stocks.length === 0) {
            return res.status(404).send("No data found")
        }

        res.status(200).send(forex_stocks)
        await client.close()
    } catch (e) {
        console.error("Error:", e)
        res.status(500).send("Server error")
    }
})

app.post("/getallcommodities", async (req, res) => {
    try {
        const { token } = req.body
        console.log(token)
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "marketdata")
        const result = await collection.find().toArray()
        if (!result || result.length === 0) {
            return res.status(404).send("No data found")
        }
        const forex_commodities = result.flatMap(item => item?.forex_data?.forex_commodities || [])
        if (!forex_commodities || forex_commodities.length === 0) {
            return res.status(404).send("No data found")
        }

        res.status(200).send(forex_commodities)
        await client.close()
    } catch (e) {
        console.error("Error:", e)
        res.status(500).send("Server error")
    }
})

app.post("/getalltopgainer", async (req, res) => {
    try {
        const { token } = req.body
        console.log(token)
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "marketdata")
        const result = await collection.find().toArray()
        if (!result || result.length === 0) {
            return res.status(404).send("No data found")
        }
        const indian_stocks = result.flatMap(item => item?.market_data?.indian_stocks || [])
        if (!indian_stocks || indian_stocks.length === 0) {
            return res.status(404).send("No data found")
        }

        res.status(200).send(indian_stocks)
        await client.close()
    } catch (e) {
        console.error("Error:", e)
        res.status(500).send("Server error")
    }
})

app.post("/getallfando", async (req, res) => {
    try {
        const { token } = req.body
        console.log(token)
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "marketdata")
        const result = await collection.find().toArray()
        if (!result || result.length === 0) {
            return res.status(404).send("No data found")
        }
        const future_option = result.flatMap(item => item?.market_data?.future_option || [])
        if (!future_option || future_option.length === 0) {
            return res.status(404).send("No data found")
        }

        res.status(200).send(future_option)
        await client.close()
    } catch (e) {
        console.error("Error:", e)
        res.status(500).send("Server error")
    }
})

app.post("/getallcurrency", async (req, res) => {
    try {
        const { token } = req.body
        console.log(token)
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "marketdata")
        const result = await collection.find().toArray()
        if (!result || result.length === 0) {
            return res.status(404).send("No data found")
        }
        const forex_currency = result.flatMap(item => item?.forex_data?.forex_currency || [])
        if (!forex_currency || forex_currency.length === 0) {
            return res.status(404).send("No data found")
        }

        res.status(200).send(forex_currency)
        await client.close()
    } catch (e) {
        console.error("Error:", e)
        res.status(500).send("Server error")
    }
})

app.get("/wallet/balance", async (req, res) => {
    try {
        const { token,email } = req.body
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "user")
        const userWallet = await collection.findOne({email:email})
        return res.status(200).json({ balance: userWallet?.balance || 0 })
        await client.close()
    } catch (e) {
        console.error("Error fetching wallet balance:", e)
        return res.status(500).json({ message: "Server error" })
    }
})
app.post("/wallet/add", async (req, res) => {
    try {
        const { token, amount, email } = req.body
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "user")
        console.log("Open")
        let userWallet = await collection.findOne({email:email})
        if (!userWallet) {
            userWallet = { email:email, balance: 0, transactions: [] }
            await collection.insertOne(userWallet)
        }
        const newBalance = userWallet.balance + amount
        await collection.updateOne({email:email},{$set: { balance: newBalance }, $push: { transactions: { type: "Added", amount, date: new Date()}}})
        return res.status(200).json({ message: "Money added successfully!", balance: newBalance })
        await client.close()
    } catch (e) {
        console.error("Error adding money:", e)
        return res.status(500).json({ message: "Server error" })
    }
})
app.post("/wallet/withdraw", async (req, res) => {
    try {
        const { token, amount, email } = req.body
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        const { client, collection } = await getCollection("TradeGalaxy", "user")

        let userWallet = await collection.findOne({email:email})

        if (!userWallet || userWallet.balance < amount) {
            client.close()
            return res.status(400).json({ message: "Insufficient balance" })
        }
        const newBalance = userWallet.balance - amount
        await collection.updateOne(
            {email:email},
            { $set: { balance: newBalance }, $push: { transactions: { type: "Withdrawn", amount, date: new Date() } } }
        )
        return res.status(200).json({ message: "Money withdrawn successfully!", balance: newBalance })
        await client.close()
    } catch (er) {
        console.error("Error withdrawing money:", e)
        return res.status(500).json({ message: "Server error" })
    }
})
app.post("/currencyconvert", async (req, res) => {
    try {
        console.log("Open Currency")
        const { token, amount, primary, secondary } = req.body
        try {
            jwt.verify(token, JWT_SECRET)
        } catch (err) {
            return res.status(401).send("Unauthorized access")
        }
        if (!amount || isNaN(amount) || amount <= 0) {
            res.status(401).send("Please enter a valid amount!")
            return
        }
        if (primary === secondary) {
            res.status(200).send(amount.toString())
            return
        }  
        const { client, collection } = await getCollection("TradeGalaxy", "marketdata")
        console.log("open client after error")
        const data = await collection.findOne({
            [`currencyconvert.${primary}.${secondary}`]: { $exists: true }
        })
        console.log("open client before error")
        if (!data) {
            res.status(401).send("Conversion rate not found!")
        } else {
            const convert = data.currencyconvert[primary][secondary]
            const result = amount * convert
            res.status(200).send(result.toString())
            console.log(result)
        }
        await client.close()
    } catch (e) {
        console.error("Error:", e)
        res.status(500).send("Server error")
    }
})




app.listen(port,()=>{
    console.log('server is running');
})