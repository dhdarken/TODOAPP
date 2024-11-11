// Arreglo para almacenar las tareas
let tasks = [];

// Función para agregar una tarea al arreglo y mostrarla en la lista
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);  // Agregar tarea al arreglo
        taskInput.value = "";  // Limpiar el campo de entrada
        renderTasks();         // Mostrar tareas actualizadas
    }
}

// Función para eliminar una tarea por su índice en el arreglo
function removeTask(index) {
    tasks.splice(index, 1);  // Eliminar tarea del arreglo
    renderTasks();           // Mostrar tareas actualizadas
}

// Función para mostrar las tareas en la lista
function renderTasks() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = "";  // Limpiar la lista

    for (let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement('div');
        taskItem.className = 'todo-item';

        const taskText = document.createElement('span');
        taskText.innerText = tasks[i];

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.onclick = () => removeTask(i);

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        todoList.appendChild(taskItem);
    }
}