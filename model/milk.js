const mongoose=require('mongoose');
const milkSchema=new mongoose.Schema({
   customerId:{type:Number,required:true},
   liter:{type:Number,required:true},
   fat:{type:Number,required:true},
},{timestamps:true});
const Milk=mongoose.model('Milk',milkSchema);
module.exports=Milk;