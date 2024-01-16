//your JS code here. If required.
const candidateSwitchCheckbox = document.getElementById('candidate-switch'); let selectedCell;
document.querySelectorAll('td:not(.given-number)').forEach(cell => cell.addEventListener('click', () => { if (selectedCell) selectedCell.classList.remove('selected'); selectedCell = cell;
selectedCell.classList.add('selected')
}))
document.querySelectorAll('.number-control').forEach(button => {
button.addEventListener('click', () => {
if (!selectedCell) return;
if (candidateSwitchCheckbox.checked) {
let candidatesArray = selectedCell.querySelector('.candidates').textContent.split('');
if (candidatesArray.includes (button.textContent)) {
candidatesArray.splice(candidatesArray.indexOf(button.textContent), 1);
} else {
candidatesArray = [...candidatesArray, button.textContent].sort(); }
selectedCell.querySelector('.candidates').textContent = candidatesArray.join('');
} else {
selectedCell.querySelector('.value').textContent = button.textContent;
}
})
})
