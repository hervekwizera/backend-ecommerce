import express from 'express';

const app = express();

app.get('/',(req,res)=>{
 res.send('welcome to kigali hot market api');
})

app.listen(3000, ()=>{
    console.log('kigali hot market is running on http://localhost:3000');
})

 export default app;

