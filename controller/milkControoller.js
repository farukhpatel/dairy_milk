const Customer=require('../model/costomer');
const Milk=require('./../model/milk');

const milkControoller={

  async addMilk(req,res){
      const {customerId,liter,fat}=req.body;
      const customer=await Customer.findOne({customerId});
      if(!customerId){
        return res.json({"User status":"This user is not registred in our dairy"});
      }
      let data;
      try {
        const milk=new Milk({
          customerId,liter,fat
        }); 
        data=await milk.save();
      } catch (error) {
        return res.json({"error":error});
      }
      res.status(201).json(data);


      

  },
  async finding(req,res){
    const customerId=req.params.customerId;
    const milkData=await Milk.find({customerId});
    res.json({"Your milk data histrory":milkData});
  }
}
module.exports=milkControoller;