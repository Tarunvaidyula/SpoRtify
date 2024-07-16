import checkoutNodeJssdk from '@paypal/checkout-server-sdk';
import paypal from '@paypal/checkout-server-sdk';
import dotenv from 'dotenv';


dotenv.config();

function environment() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  return new paypal.core.SandboxEnvironment(clientId, clientSecret);
};

const client = () => {
  return new paypal.core.PayPalHttpClient(environment());
};

export default { client };