const router=require('express').Router();
const customerController=require('./../controller/customerController');
const milkControoller=require('./../controller/milkControoller');
router.post('/addCustomer',customerController.customerLogin);
router.post('/addMilk',milkControoller.addMilk);
router.get('/findMilkData/:customerId',milkControoller.finding);
module.exports=router;