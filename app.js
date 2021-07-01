const express=require('express');
const app=express();
const port=process.env.PORT || 2000;



app.use(express.json());
app.use(express.urlencoded({extended:false}));


//connected with local database
require('./database/db');
const customer=require('./routes/customer');
app.use(customer);


app.listen(port,()=>{
  console.log(`listen to port ${port}`);
});