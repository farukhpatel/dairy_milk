const Customer = require('../model/costomer');
const Milk = require('../model/milk');

const milkController = {

  async addMilk(req, res) {
    const { customerId, liter, fat } = req.body;
    let customer;
    let data;
    try {
      const find = await Customer.findOne({ customerId });
      if (!find) {
        return res.json({ "User": "Not added in our dairy milk" });
      }
      const milk = new Milk({
        customerId, liter, fat
      });
      data = await milk.save();
    } catch (error) {
      return res.json({ "Error": error });
    }
    res.status(201).json(data);
  },
  async finding(req, res) {
    const customerId = req.params.customerId;
    const milkData = await Milk.find({ customerId });
    if (!milkData.length) {
      return res.json({ 'message': 'No customer found with this customer ID' });
    }
    res.json({ "milkHistory": milkData });
  }
}
module.exports =milkController ;