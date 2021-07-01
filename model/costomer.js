const mongoose=require('mongoose');
const customerSchema=new mongoose.Schema({
  customerName:{type:String,required:true},
  customerId:{type:Number,required:true}
});
const Customer=mongoose.model('Customer',customerSchema);
module.exports=Customer;