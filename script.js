const mineButton = document.querySelector('#mine-button');
const rebirthButton = document.querySelector('#rebirth-button');
const counterDisplay = document.querySelector('#counter');
const rebirthDisplay = document.querySelector('#rebirth-count');
const multiplierDisplay = document.querySelector('#multiplier');
const statusDisplay = document.querySelector('#status');

const maxRebirths = 8;
let blocksMined = 0;
let rebirths = 0;

mineButton.addEventListener('click', () => {
  if (rebirths === 0) {
    blocksMined += 1;
  } else {
    blocksMined = blocksMined === 0 ? 2 ** rebirths : blocksMined * 2;
  }

  counterDisplay.textContent = blocksMined.toLocaleString();
  statusDisplay.textContent = 'Keep mining!';
});

rebirthButton.addEventListener('click', () => {
  if (rebirths >= maxRebirths) return;

  rebirths += 1;
  blocksMined = 0;
  counterDisplay.textContent = '0';
  rebirthDisplay.textContent = rebirths;
  multiplierDisplay.textContent = (2 ** rebirths).toLocaleString();
  statusDisplay.textContent = rebirths === maxRebirths
    ? 'Maximum rebirths reached. Your next block starts at 256.'
    : `Rebirth ${rebirths} complete. Your next block starts at ${2 ** rebirths}.`;

  if (rebirths === maxRebirths) {
    rebirthButton.disabled = true;
  }
});