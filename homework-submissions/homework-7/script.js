// Change the visible tip each time the button is clicked.
const tips = [
    'Use a unique password for each account.',
    'Enable multi-factor authentication whenever possible.',
    'Keep your operating system and applications updated.',
    'Check links and sender addresses before opening messages.'
];

const tipButton = document.getElementById('next-tip');
const tipText = document.getElementById('security-tip');
let tipIndex = 0;

tipButton.addEventListener('click', function () {
    tipIndex = (tipIndex + 1) % tips.length;
    tipText.textContent = tips[tipIndex];
});

// Change the input style as the user types.
const goalForm = document.getElementById('goal-form');
const goalInput = document.getElementById('goal-input');
const goalList = document.getElementById('practice-list');
const goalStatus = document.getElementById('goal-status');

function updateInputStyle() {
    goalInput.classList.toggle('has-text', goalInput.value.trim() !== '');
}

goalInput.addEventListener('input', updateInputStyle);

// Create a new list item and attach its own removal button.
goalForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const goal = goalInput.value.trim();

    if (goal === '') {
        goalStatus.textContent = 'Please enter a learning goal.';
        goalInput.focus();
        return;
    }

    const listItem = document.createElement('li');
    const goalText = document.createElement('span');
    const removeButton = document.createElement('button');

    goalText.textContent = goal;
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('aria-label', 'Remove goal: ' + goal);

    removeButton.addEventListener('click', function () {
        listItem.remove();
        goalStatus.textContent = 'Goal removed. ' + goalList.children.length + ' goal(s) remaining.';
        goalInput.focus();
    });

    listItem.appendChild(goalText);
    listItem.appendChild(removeButton);
    goalList.appendChild(listItem);

    goalStatus.textContent = 'Goal added. ' + goalList.children.length + ' goal(s) in your list.';
    goalInput.value = '';
    updateInputStyle();
    goalInput.focus();
});
