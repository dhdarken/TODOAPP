
let tasks = [];


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const todoId = tasks.length + 1;

    if (taskText !== "") {
        tasks.push({ id: todoId, nombre: taskText, estado: 'pendiente' });
        taskInput.value = "";
        renderTasks();
    }
}


function modificarTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].estado = tasks[i].estado === 'pendiente' ? 'completado' : 'pendiente';
            renderTasks();
            return;
        }
    }
}


function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


function renderTasks() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = "";

    for (let i = 0; i < Math.min(tasks.length, 4); i++) {
        const task = tasks[i];

        const taskItem = document.createElement('div');
        taskItem.className = 'todo-item';

        const taskText = document.createElement('span');
        taskText.innerText = task.nombre

        const estadoImg = document.createElement('img');
        estadoImg.src = task.estado === 'pendiente' ? '/img/cruz.png' : '/img/garrapata.png';
        estadoImg.alt = task.estado;
        estadoImg.className = 'estado-img';

        const modButton = document.createElement('button');
        modButton.innerText = "Cambiar estado";
        modButton.onclick = () => modificarTask(task.id);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.onclick = () => removeTask(i);

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(modButton);
        taskItem.appendChild(estadoImg);
        todoList.appendChild(taskItem);
    }
}