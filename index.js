const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
require('dotenv').config()
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');

// midleware 

app.use(express.json())
app.use(cors())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uujg3og.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const projectsCollection = client.db('developerPortfolio-1').collection('projects')

        app.get('/projects',async (req, res) =>{
            const query = {}
            const result = await projectsCollection.find(query).toArray()
            res.json(result)
        })
        app.get('/project/:id',async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result = await projectsCollection.findOne(query)
            res.json(result)
        })

    }
    finally{

    }

}
run().catch(err=> console.err(err))



app.get('/', (req, res) => {
  res.send('Foysal portfolio server is running ')
})

app.listen(port, () => {
  console.log(`Foysal Portfolio server is running ${port}`)
})