const openPayment = document.getElementById('openPayment');
const closePayment = document.getElementById('closePayment');
const container = document.getElementById('container');
const paymentBox = document.getElementById('paymentBox');

openPayment.addEventListener('click', () => {
    container.style.display = "none"; // Hide the main container
    paymentBox.style.display = "block"; // Show the payment box
});

closePayment.addEventListener('click', () => {
    paymentBox.style.display = "none"; // Hide the payment box
    container.style.display = "block"; // Show the main container
});
