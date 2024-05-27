const express = require('express');
const stripe = require('stripe')('tu-clave-secreta-de-stripe');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(3001, () => console.log('Servidor funcionando en el puerto 3001'));
