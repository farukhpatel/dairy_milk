const mongoose=require('mongoose');
require('dotenv').config();
const URL=process.env.URL;
// console.log(URL);
module.exports=mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(
    console.log("connection done")
)
.catch(err=>{console.log(err)});
