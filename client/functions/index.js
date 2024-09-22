
const functions = require('firebase-functions');
 const express = require('express');
 
 const cors = require('cors');
  const stripe = require('stripe')('sk_test_51Q1SGlEV3gLR2BISdQnXGV8mC0nm4xuHkj5MRECFu7aIOhGAnrrU0Uinpjr9qlLYOD5bfk8RAcB2H4oHUKNRxTem009AQ8cUki')
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

//ApI

//app config
const app = express();

//middleware
app.use(cors({origin: true }));
app.use(express.json());
//routes
app.get('/', (req , res)=>{
    res.status(200).send('hello world  ')
})
app.post('/payments/create',async (req,res) =>{
    const total = req.query.total;
    console.log('payment  request receive  !!', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,// sub unit currency
        currency: 'usd',
        });
        res.status(201).send({
            clientSecret: paymentIntent.client_secret,
            
            });
})

// listen command
exports.api =functions.https.onRequest(app)
//example
//http://127.0.0.1:5001/e-clone-75db1/us-central1/api