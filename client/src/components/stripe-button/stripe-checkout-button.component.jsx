import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    'pk_test_51I6ac8Hatzhrt5XH73SU8HvFKg0dCVUskrb3rxhG2jbbWjEUFkYYchC2PkFV9u2Xt0ExyH15DbwdMeHe8teyBgdu00UJTRKH5a';

  const onToken = function (token) {
    console.log(token);
    alert('Payment Successful');
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
