
            document.addEventListener("DOMContentLoaded", function () {
                const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
                const taskList = document.getElementById("taskList");
    
                storedTasks.forEach(function (taskText) {
                    addTask(taskText);
                });
            });
    
            function addTask(taskText) {
                taskText = taskText || document.getElementById("taskInput").value.trim();
                
                if (taskText === "") {
                    alert("Please enter a task.");
                    return;
                }
    
                const taskList = document.getElementById("taskList");
                const taskItem = document.createElement("li");
                taskItem.className = "task-item";
    
                const taskTextElement = document.createElement("input");
                taskTextElement.type = "text";
                taskTextElement.value = taskText;
                taskTextElement.readOnly = true;
    
                const taskActions = document.createElement("div");
                taskActions.className = "task-actions";
    
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.onclick = function () {
                    taskItem.remove();
                    updateLocalStorage();
                };
    
                taskActions.appendChild(deleteButton);
                taskItem.appendChild(taskTextElement);
                taskItem.appendChild(taskActions);
                taskList.appendChild(taskItem);
    
                if (taskTextElement.readOnly === false) {
                    taskTextElement.focus();
                }
    
                updateLocalStorage();
            }
    
            function updateLocalStorage() {
                const tasks = Array.from(document.querySelectorAll(".task-item input[type='text']"))
                    .map(function (taskElement) {
                        return taskElement.value;
                    });
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
