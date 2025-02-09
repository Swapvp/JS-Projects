

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
  listItems.innerHTML = ""; // Clear the UI before adding stored tasks

  listItemArr.forEach((task) => {
    createTaskElement(task);
  });
};

// Function to create a task element
const createTaskElement = (task) => {
  let liDiv = document.createElement("div");
  liDiv.classList.add("li-div");

  let li = document.createElement("li");
  li.innerText = task.TaskItem;

  let delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.setAttribute("data-id", task.id);

  liDiv.appendChild(li);
  liDiv.appendChild(delBtn);
  listItems.appendChild(liDiv);

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
  };

  listItemArr.push(newTask);
  saveTasks(); // Update localStorage
  createTaskElement(newTask); // Add task to UI

  input.value = ""; // Clear input field
});

// Load tasks on page load
loadTasks();

