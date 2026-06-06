function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="toggleTask(this)">✓</button>
            <button class="delete-btn" onclick="deleteTask(this)">✗</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function toggleTask(button) {
    const task = button.parentElement.previousElementSibling;
    task.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}