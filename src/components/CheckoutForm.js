import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('tu-clave-publica-de-stripe');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    let clientSecret;
    event.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (!error) {
      setPaymentSucceeded(true);
      console.log('PaymentIntent:', paymentIntent);
    } else {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pagar
      </button>
      {paymentSucceeded && <p>Pago exitoso!</p>}
    </form>
  );
};

const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default App;
