let count = 0;
const clickBtn = document.getElementById("clickBtn");
const countText = document.getElementById("countText");
const stopMsg = document.getElementById("stopMsg");

clickBtn.addEventListener("click", () => {
  count++;
  countText.textContent = "Count: " + count;

  if (count == 5) {
    stopMsg.textContent = "Stop clicking 😂";
    count = 0;
  }
});


const textInput = document.getElementById("textInput");
const changeBtn = document.getElementById("changeTextBtn");
const display = document.getElementById("displayText");

changeBtn.addEventListener("click", () => {
  display.textContent = textInput.value;
  display.style.color = "gray";
  display.style.fontSize = "20px";
});

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  let task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = task;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});


