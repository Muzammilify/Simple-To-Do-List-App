// Theme Toggle Logic
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const appContainer = document.querySelector('.app-container');
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task');

// Toggle theme when the sparkle button is clicked
themeToggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    appContainer.classList.toggle('dark-mode');
    taskInput.classList.toggle('dark-mode');
    addButton.classList.toggle('dark-mode');
});

// Task Add and Remove Logic
document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear input field
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    
    // Create list item
    const taskItem = document.createElement('li');
    
    // Create task text
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);

    // Toggle task completion on click
    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    // Add dark mode class to task item
    taskItem.classList.toggle('dark-mode');

    // Append task item to the task list
    taskList.appendChild(taskItem);
}