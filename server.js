// Create a file named server.js.
// Inside this file, set up a basic Express server that listens on a port (e.g., 3000) and logs a message to the console on startup.

import express from 'express';
import axios from 'axios';

const app = express();
const port = 3007;

app.get('/', (req, res)=>{
    res.send("Homepage");
})

app.listen(port, ()=>{
    console.log(`server is listening on the port: "http://localhost:${port}`)
})

// Task 3: Create the API Route
// In server.js, create a new GET route at the path /api/fun-fact.
// This route will be responsible for fetching the data and sending it to the client

app.get("/api/fun-fact", async (req, res)=>{
    try{
        const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
        

    }catch(error){

    }
})