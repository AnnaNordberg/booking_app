const express = require('express');
const app = express();

app.get('/secret', async (req, res) => {
  const intent = paymentIntent // ... Fetch or create the PaymentIntent
  res.json({client_secret: intent.client_secret});
});

app.listen(3001, () => {
  console.log('Running on port 3001');
});