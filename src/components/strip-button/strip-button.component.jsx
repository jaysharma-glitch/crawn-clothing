import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HFGMNDyxKaI4kJr5ziJD7lFeK2RdeHwgAp7WqcWC601gPWRcMEIQTt3fP4gRUC0s18F66jZwA1vID4cWBEKDlaA00c4RUiFqC'

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Gaerkaanooni"
      billingAddress
      shippingAddress
      currency="INR"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
