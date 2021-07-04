const Customer=require('./../model/costomer');
const customerController={
   async customerLogin(req,res){
    const {customerName,customerId}=req.body;
    const findCustomer=await Customer.findOne({customerId});
    if(findCustomer){
       return res.json({"customer":"Already exist"});
    }
    try {
        const customer=new Customer({
            customerName,
            customerId
        });
        const data=await customer.save();
        res.send({"saved":data});
    } catch (error) {
        return res.json({"error":error});
    }
   }
}
module.exports=customerController;