// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_51GuYraFvYDucIna5NhNR2k7ANHYMlnuFYMykmgNvvYqxVmD7Uxcn48Za1b7TPkJAdv9Uk0XGcYtbEnXp0KwzLVg000qGVc9Qtx', {apiVersion: ''});

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: 'sek',
  // Verify your integration in this guide by including this parameter
  metadata: {integration_check: 'accept_a_payment'},
});