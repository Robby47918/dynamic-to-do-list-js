// script.js

// Run code only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM Elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Retrieve and trim input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Assign onclick event to remove button
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append remove button to list item
    li.appendChild(removeButton);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }

  // Event listener for Add Task button
  addButton.addEventListener('click', addTask);

  // Event listener for pressing Enter in input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Invoke addTask on DOMContentLoaded (optional initial run)
  // This ensures the function is available immediately
  // but doesn’t add a task until user input
  // If you want to auto-run, uncomment the line below:
  // addTask();
});
