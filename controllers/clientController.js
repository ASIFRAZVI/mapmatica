const client=require('../models/client')
// expenseController.js

// Create a new expense
exports.createclient = async (req, res) => {
  try {
    const { name ,email,phnumber, message } = req.body;
    const client1= new client({ name ,email,phnumber, message });
    await client1.save();
    res.redirect("/successfull")
  }catch (error) {
    //console.log(error)
    res.render('error1')
  }
};

// Get all expenses
exports.getclients = async (req, res) => {
  try {
    const clients = await client.find()
    res.json(clients);
  } catch (error) {
    res.render('error1');
  }
};


// Delete an expense
// exports.deleteclient = async (req, res) => {
//     try {
//       const clientId = req.params.id;
//       const deletedclient = await client.findByIdAndDelete(clientId);
//       if (!deletedclient) {
//         return res.status(404).json({ error: 'Client not found.' });
//       }
//       //res.render('homepage')
//     } catch (error) {
//       console.log(error);
  
//     }
//   };
  

