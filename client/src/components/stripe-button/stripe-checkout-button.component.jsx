import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    'pk_test_51I6ac8Hatzhrt5XH73SU8HvFKg0dCVUskrb3rxhG2jbbWjEUFkYYchC2PkFV9u2Xt0ExyH15DbwdMeHe8teyBgdu00UJTRKH5a';

  const onToken = function (token) {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceInCents,
        token,
      },
    })
      .then((response) => alert('Payment successful'))
      .catch((error) => {
        alert('Payment not successful');
        console.log('Payment error: ', JSON.parse(error));
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}.`}
      amount={priceInCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
