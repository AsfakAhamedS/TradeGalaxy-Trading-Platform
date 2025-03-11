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
            res.status(401).send("Invalid Email and Password");
            return
        }
        //console.log(result)
        const token = jwt.sign({ id: result._id, email: result.email }, JWT_SECRET, { expiresIn: "1h" });
        console.log(token)
        res.status(200).send("Success")
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
        const result = await collection.insertOne({
            name: name,
            email: email,
            password: password,
            phone:phone})
        await client.close()
        res.status(200).send("Success")
    }catch(e){
        console.log(e)
    }
})

app.post("/getData",async(req,res)=>{
    try {
        const {token}=req.body
        if(jwt.verify(token,JWT_SECRET)){
            return  res.status(200).send("token verified");
        }else{
            return  res.status(401).send("UN AUthorized access");
        }
    } catch (e) {
        return res.status(401).send("UN AUthorized access");
    }
})

app.listen(port,()=>{
    console.log('server is running');
})