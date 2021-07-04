const Customer=require('../model/costomer');
const Milk=require('./../model/milk');

const milkControoller={

  async addMilk(req,res){
      const {customerId,liter,fat}=req.body;
      let customer;
      let data;
  
      try {
        const find=await Customer.findOne({customerId});
        if(find){
          const milk=new Milk({
            customerId,liter,fat
          }); 
          data=await milk.save();
        } 
        else{
          return res.json({"User":"Not added in our dairy milk"});
        }
      } catch (error) {
        return res.json({"Error":error});
      }        
         
        
      
    
      res.status(201).json(data);
  },
  async finding(req,res){
    const customerId=req.params.customerId;
    const milkData=await Milk.findOne({customerId});
    if(!milkData){
      return res.json({'message':'No customer found with this customerId'});
    }
    res.json({"milkHistory":milkData});
}
}
module.exports=milkControoller;