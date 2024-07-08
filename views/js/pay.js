document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form inputs
    var cardholderName = document.getElementById('cardholderName').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryMonth = document.getElementById('expiryMonth').value;
    var expiryYear = document.getElementById('expiryYear').value;
    var cvv = document.getElementById('cvv').value;
  

    if (!isValidName(cardholderName)) {
      alert('Invalid cardholder name');
      return;
    }
  
    // Validate card number (simple example, can be improved)
    if (!isValidCardNumber(cardNumber)) {
      alert('Invalid card number');
      return;
    }
  
    // Validate expiry date (simple example, can be improved)
    if (!isValidExpiryMonth(expiryMonth) || !isValidExpiryYear(expiryYear)) {
      alert('Invalid expiry date');
      return;
    }
  
    // Validate CVV (simple example, can be improved)
    if (!isValidCVV(cvv)) {
      alert('Invalid CVV');
      return;
    }
  
  });
  
  // Function to validate cardholder's name (simple example, can be improved)
  function isValidName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
  }
  
  // Function to validate card number (simple example, can be improved)
  function isValidCardNumber(cardNumber) {
    return /^\d{16}$/.test(cardNumber);
  }
  
  // Function to validate expiry month (simple example, can be improved)
  function isValidExpiryMonth(expiryMonth) {
    return /^[01]\d$/.test(expiryMonth) && parseInt(expiryMonth, 10) <= 12;
  }
  
  // Function to validate expiry year (simple example, can be improved)
  function isValidExpiryYear(expiryYear) {
    var currentYear = new Date().getFullYear();
    return /^\d{4}$/.test(expiryYear) && parseInt(expiryYear, 10) >= currentYear;
  }
  
  // Function to validate CVV (simple example, can be improved)
  function isValidCVV(cvv) {
    return /^\d{3}$/.test(cvv);
  }
  