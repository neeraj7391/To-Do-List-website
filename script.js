document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText === '') return; // Ignore empty submissions

        const taskItem = document.createElement('li');
        taskItem.innerText = taskText;
        taskItem.innerHTML += '<button>Delete</button>';

        taskItem.querySelector('button').addEventListener('click', function() {
            taskItem.remove();
        });

        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });

        taskList.appendChild(taskItem);
        taskInput.value = '';
    });
});
