const form = document.getElementById("tsk-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nuovoTaskField = document.getElementById("nuovo-tsk");
  console.log(nuovoTaskField.value);

  const task = document.createElement("div");
  task.classList.add("task");

  const taskTitle = document.createElement("h5");
  taskTitle.innerText = `${nuovoTaskField.value}`;
  const completeButton = document.createElement("button");
  completeButton.innerText = "Completato";

  task.append(taskTitle);
  /* task.append(completeButton); */
  console.log(task);
  const taskList = document.getElementById("task-list");

  completeButton.append(task);
  console.log(completeButton);

  taskList.appendChild(task);

  nuovoTaskField.value = "";
});
