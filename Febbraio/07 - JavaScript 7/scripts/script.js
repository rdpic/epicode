document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const errorMessage = document.getElementById('errorMessage');
    hideErrorMessage();

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';
            hideErrorMessage();
        } else {
            showErrorMessage();
            setTimeout(function() {
                hideErrorMessage();
            }, 5000)
        };
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function showErrorMessage() {
        errorMessage.style.display = 'block';
    }

    function hideErrorMessage() {
        errorMessage.style.display = 'none';
    }

    function createTaskItem(taskText) {
        const li = document.createElement('li');
        li.classList.add('task-item');

        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(taskLabel);
        li.appendChild(deleteBtn);

        return li;
    }
});