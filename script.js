// Select elements
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Initialize counter
let counter = 0;

// Event listeners
incrementBtn.addEventListener('click', () => {
  counter++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  counter--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  updateDisplay();
});

// Update the counter display
function updateDisplay() {
  counterDisplay.textContent = counter;
}