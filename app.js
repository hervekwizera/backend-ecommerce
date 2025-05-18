import express from 'express';
import {PORT} from './config/env.js';

const app = express();

app.get('/',(req,res)=>{
 res.send('welcome to kigali hot market api');
})

app.listen(PORT, ()=>{
    console.log(`kigali hot market is running on http://localhost:${PORT}`);
})

 export default app;

