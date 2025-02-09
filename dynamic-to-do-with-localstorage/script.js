let input = document.querySelector("#input");
let addTodo = document.querySelector("#addBtn");
let listItems = document.querySelector(".list-items");

let listItemArr = JSON.parse(localStorage.getItem("tasks")) || [];
let idCount = listItemArr.length
  ? listItemArr[listItemArr.length - 1].id + 1
  : 1; // Maintain unique IDs

// Function to save tasks to localStorage
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(listItemArr));
};

// Function to load tasks from localStorage
const loadTasks = () => {
  listItems.innerHTML = ""; // Clear UI before loading stored tasks
  listItemArr.forEach((task) => {
    createTaskElement(task);
  });
};

// Function to create a task element
const createTaskElement = (task) => {
  let liDiv = document.createElement("div");
  liDiv.classList.add("li-div");

  // Task text container
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task-text");

  let li = document.createElement("li");
  li.innerText = task.TaskItem;
  li.setAttribute("data-id", task.id);

  // Apply strikethrough if task is completed
  if (task.completed) {
    li.classList.add("completed");
  }

  taskDiv.appendChild(li);

  // Buttons container
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("button-group");

  let completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✔";
  completeBtn.setAttribute("data-id", task.id);

  let editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.setAttribute("data-id", task.id);

  let delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.setAttribute("data-id", task.id);

  btnDiv.appendChild(completeBtn);
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(delBtn);

  liDiv.appendChild(taskDiv);
  liDiv.appendChild(btnDiv);
  listItems.appendChild(liDiv);

  // Mark task as completed
  completeBtn.addEventListener("click", function () {
    let taskId = parseInt(completeBtn.getAttribute("data-id"));
    let taskObj = listItemArr.find((t) => t.id === taskId);
    taskObj.completed = !taskObj.completed; // Toggle completed state
    saveTasks();
    li.classList.toggle("completed");
  });

  // Edit task event
  editBtn.addEventListener("click", function () {
    let taskId = parseInt(editBtn.getAttribute("data-id"));
    let taskObj = listItemArr.find((t) => t.id === taskId);
    let updatedText = prompt("Edit your task:", taskObj.TaskItem);

    if (updatedText !== null && updatedText.trim() !== "") {
      taskObj.TaskItem = updatedText.trim();
      saveTasks();
      li.innerText = taskObj.TaskItem;
    }
  });

  // Delete task event
  delBtn.addEventListener("click", function () {
    let taskId = parseInt(delBtn.getAttribute("data-id"));
    liDiv.remove(); // Remove from UI

    // Remove from array & update localStorage
    listItemArr = listItemArr.filter((t) => t.id !== taskId);
    saveTasks();
  });
};

// Event: Add a new task
addTodo.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Cannot add blank task");
    return;
  }

  let newTask = {
    id: idCount++,
    TaskItem: input.value.trim(),
    completed: false,
  };

  listItemArr.push(newTask);
  saveTasks(); // Update localStorage
  createTaskElement(newTask); // Add task to UI

  input.value = ""; // Clear input field
});

// Load tasks on page load
loadTasks();
