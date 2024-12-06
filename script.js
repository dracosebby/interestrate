document.getElementById('interest-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100; // convert percentage to decimal
    const time = parseFloat(document.getElementById('time').value);

    // Correct formula for compound interest
    const amount = principal * Math.pow((1 + rate), time);
    const interest = amount - principal;

    document.getElementById('result').innerText = `Total Amount: $${amount.toFixed(2)}\nInterest Gained: $${interest.toFixed(2)}`;
});
