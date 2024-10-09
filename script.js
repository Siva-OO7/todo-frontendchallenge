
// Theme toggle elements
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Task elements
const taskForm = document.getElementById('item-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Clear completed elements
const clearCompletedBtn = document.getElementById('clear-completed');
const clearCompletedSmallBtn = document.getElementById('clear-completed-small');

// Task count display elements
const itemsLeftDisplay = document.getElementById('items-left');
const itemsLeftSmallDisplay = document.getElementById('items-left-small');

// Task filtering buttons
const allTasksBtn = document.getElementById('all-tasks');
const activeTasksBtn = document.getElementById('active-tasks');
const completedTasksBtn = document.getElementById('completed-tasks');
const allTasksSmallBtn = document.getElementById('all-tasks-small');
const activeTasksSmallBtn = document.getElementById('active-tasks-small');
const completedTasksSmallBtn = document.getElementById('completed-tasks-small');

// Existing task list from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage and display them on page load
function loadTasksFromLocalStorage() {
    taskList.innerHTML = ''; // Clear the list before loading
    tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    updateTaskCount();
}

// Function to add a task to the DOM with drag-and-drop
function addTaskToDOM(taskText, isCompleted = false) {
    const li = document.createElement('li');
    li.className = 'task-item flex justify-between py-4 px-6 bg-veryLightGray text-veryDarkGrayishBlue dark:bg-veryDarkDesaturatedBlue dark:text-veryDarkGrayishBlue border-b border-b-gray-300 dark:border-b-veryDarkGrayishBlue';
    li.draggable = true;  // Make task draggable

    if (isCompleted) {
        li.classList.add('completed');
    }

    const span = createSpan('flex items-center', taskText);
    const crossBtn = createCrossBtn();

    li.appendChild(span);
    li.appendChild(crossBtn);
    taskList.appendChild(li);

    // Drag and drop event listeners
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('drop', handleDrop);
    li.addEventListener('dragend', handleDragEnd);

    // Delete task on click
    crossBtn.addEventListener('click', () => {
        const taskIndex = tasks.findIndex(task => task.text === taskText);
        tasks.splice(taskIndex, 1);
        saveTasksToLocalStorage();
        li.remove();
        updateTaskCount();
    });
}

let draggedItem = null;

// Handle drag start
function handleDragStart(e) {
    draggedItem = this;
    setTimeout(() => {
        this.classList.add('hidden');
    }, 0);
}

// Handle drag over
function handleDragOver(e) {
    e.preventDefault();  // Allow drop
}

// Handle drop
function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('hidden');
    const allItems = [...document.querySelectorAll('.task-item')];
    const droppedIndex = allItems.indexOf(this);
    const draggedIndex = allItems.indexOf(draggedItem);
    
    // Rearrange tasks array
    if (draggedIndex !== droppedIndex) {
        tasks.splice(droppedIndex, 0, tasks.splice(draggedIndex, 1)[0]);
        saveTasksToLocalStorage();
        loadTasksFromLocalStorage();  // Re-render the task list
    }
}

// Handle drag end
function handleDragEnd() {
    this.classList.remove('hidden');
}

// Helper function to create a task item span
function createSpan(classes, taskText) {
    const span = document.createElement('span');
    span.className = classes;

    const roundBtn = createRoundBtn('mr-4 p-2 sm:p-3 rounded-full bg-transparent border-2 border-gray-600 complete-task-btn', taskText);
    span.appendChild(roundBtn);

    const innerSpan = document.createElement('span');
    innerSpan.textContent = taskText;

    span.append(innerSpan);
    return span;
}

// Helper function to create a round button for completing tasks
function createRoundBtn(classes, taskText) {
    const roundBtn = document.createElement('button');
    roundBtn.className = classes;

    // Mark task as completed in local storage
    roundBtn.addEventListener('click', (e) => {
        e.target.classList.toggle('btn-active');
        e.target.parentNode.parentNode.classList.toggle('completed');

        const task = tasks.find(task => task.text === taskText);
        task.completed = !task.completed; // Toggle completed status
        saveTasksToLocalStorage();
        updateTaskCount();
    });

    return roundBtn;
}

// Helper function to create the delete (cross) button
function createCrossBtn() {
    const btn = document.createElement('button');
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
        </svg>`;
    return btn;
}

// Event listener for the task form submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task name');
        return;
    }

    const newTask = { text: taskText, completed: false }; // Task object
    tasks.push(newTask);
    saveTasksToLocalStorage();

    addTaskToDOM(taskText);
    taskInput.value = ''; // Clear input
    updateTaskCount();
});

// Function to show all tasks
function showAllTasks() {
    loadTasksFromLocalStorage(); // This will refresh the task list
}

// Function to show active tasks
function showActiveTasks() {
    taskList.innerHTML = '';
    tasks.filter(task => !task.completed).forEach(task => addTaskToDOM(task.text, task.completed));
}

// Function to show completed tasks
function showCompletedTasks() {
    taskList.innerHTML = '';
    tasks.filter(task => task.completed).forEach(task => addTaskToDOM(task.text, task.completed));
}

// Update task count and display how many tasks are left
function updateTaskCount() {
    const activeTaskCount = tasks.filter(task => !task.completed).length;
    itemsLeftDisplay.textContent = `${activeTaskCount} items left`;
    itemsLeftSmallDisplay.textContent = `${activeTaskCount} items left`;
}

// Clear completed tasks function
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed); // Keep only active tasks
    saveTasksToLocalStorage();
    loadTasksFromLocalStorage(); // Refresh task list
}

// Add event listeners for filtering buttons
allTasksBtn.addEventListener('click', showAllTasks);
activeTasksBtn.addEventListener('click', showActiveTasks);
completedTasksBtn.addEventListener('click', showCompletedTasks);
allTasksSmallBtn.addEventListener('click', showAllTasks);
activeTasksSmallBtn.addEventListener('click', showActiveTasks);
completedTasksSmallBtn.addEventListener('click', showCompletedTasks);

// Event listeners for clear completed buttons
clearCompletedBtn.addEventListener('click', clearCompletedTasks);
clearCompletedSmallBtn.addEventListener('click', clearCompletedTasks);

// Set initial theme based on local storage or system preference
if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
}

// Theme toggle function
function toggleMode() {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}

// Event listener for the theme toggle button
themeToggleBtn.addEventListener('click', toggleMode);

// Initialize tasks on page load
loadTasksFromLocalStorage();








