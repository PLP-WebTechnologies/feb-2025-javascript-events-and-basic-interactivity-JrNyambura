// Button click: change color
document.getElementById('changeColorBtn').addEventListener('click', () => {
  document.body.style.backgroundColor = '#dff9fb';
});

// Hover effect
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => hoverBox.style.backgroundColor = '#c8d6e5');
hoverBox.addEventListener('mouseout', () => hoverBox.style.backgroundColor = '#eee');

// Keypress detection
const keyInput = document.getElementById('keyInput');
const keyOutput = document.getElementById('keyOutput');
keyInput.addEventListener('keyup', (e) => {
  keyOutput.textContent = `You typed: ${e.key}`;
});

// Double-click secret
keyInput.addEventListener('dblclick', () => {
  alert('🎉 You discovered the double-click secret!');
});

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// Form validation
const form = document.getElementById('myForm');
const password = document.getElementById('password');
const feedback = document.getElementById('passwordFeedback');

password.addEventListener('input', () => {
  if (password.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
  } else {
    feedback.textContent = 'Looks good!';
    feedback.style.color = 'green';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (password.value.length < 8) {
    alert('Password too short!');
  } else {
    alert('Form submitted successfully!');
    form.reset();
    feedback.textContent = '';
  }
});
