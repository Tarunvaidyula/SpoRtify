document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('paymentForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    var cardholderName = document.getElementById('cardholderName').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryMonth = document.getElementById('expiryMonth').value;
    var expiryYear = document.getElementById('expiryYear').value;
    var cvv = document.getElementById('cvv').value;

    if (!isValidName(cardholderName)) {
      alert('Invalid cardholder name');
      return;
    }

    if (!isValidCardNumber(cardNumber)) {
      alert('Invalid card number');
      return;
    }

    if (!isValidExpiryMonth(expiryMonth) || !isValidExpiryYear(expiryYear)) {
      alert('Invalid expiry date');
      return;
    }

    if (!isValidCVV(cvv)) {
      alert('Invalid CVV');
      return;
    }

    try {
      const orderID = await createOrder();
      const captureResult = await captureOrder(orderID);
      
      if (captureResult.status === 'COMPLETED') {
        alert('Transaction completed');
        window.location.href = '/confirmation'; // Redirect to confirmation page
      } else {
        alert('Transaction failed');
      }
    } catch (error) {
      console.error('Error during transaction:', error);
      alert('Transaction failed. Please try again later.');
    }
  });

  async function createOrder() {
    try {
      const res = await fetch('/create-order', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        }
      });
      const orderData = await res.json();
      return orderData.id;
    } catch (error) {
      throw new Error('Failed to create order');
    }
  }

  async function captureOrder(orderID) {
    try {
      const res = await fetch('/capture-order', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          orderId: orderID
        })
      });
      const orderData = await res.json();
      return orderData;
    } catch (error) {
      throw new Error('Failed to capture order');
    }
  }

  function isValidName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
  }

  function isValidCardNumber(cardNumber) {
    return /^\d{16}$/.test(cardNumber);
  }

  function isValidExpiryMonth(expiryMonth) {
    return /^[01]\d$/.test(expiryMonth) && parseInt(expiryMonth, 10) <= 12;
  }

  function isValidExpiryYear(expiryYear) {
    var currentYear = new Date().getFullYear();
    return /^\d{4}$/.test(expiryYear) && parseInt(expiryYear, 10) >= currentYear;
  }

  function isValidCVV(cvv) {
    return /^\d{3}$/.test(cvv);
  }
});
