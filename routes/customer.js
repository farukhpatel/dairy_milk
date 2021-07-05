const router=require('express').Router();
const customerController=require('./../controller/customerController');
const milkController=require('./../controller/milkController');
router.post('/addCustomer',customerController.customerLogin);
router.post('/addMilk',milkController.addMilk);
router.get('/findMilkData/:customerId',milkController.finding);
module.exports=router;