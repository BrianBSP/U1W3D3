/* const form = document.getElementById("tsk-form");
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

  task.append(taskTitle, completeButton);
  //task.append(completeButton);
  console.log(task);
  const taskList = document.getElementById("task-list");

  completeButton.append(task);
  console.log(completeButton);

  taskList.appendChild(task);
  //completeButton.appendChild(taskList);

  nuovoTaskField.value = "";
}); */

// Ho ricominciato l'esercizio da capo

const form = document.getElementById("tsk-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);

  const task = document.createElement("div"); //creo un nuovo div
  //console.log(task);

  task.classList.add("task"); //gli assegno una classe

  const nomeTask = document.getElementById("nuovo-tsk"); //prendo l'input dell'user
  //console.log(nomeTask.value);
  const titoloTask = document.createElement("h5");

  titoloTask.innerText = `${nomeTask.value}`; //attribuisco l'input alla nuovo div
  //console.log(titoloTask);
  const bottoneElimina = document.createElement("button");
  bottoneElimina.innerText = "Elimina";

  task.append(titoloTask, bottoneElimina); //attibuisco il titolo e il bottone al nuovo div
  const listaTask = document.getElementById("task-list");
  //Funzione console.log(listaTask);
  listaTask.appendChild(task);
  // Funzione Click che sbarra la task completata
  titoloTask.addEventListener("click", function (event) {
    titoloTask.classList.toggle("sbarra");
  });

  //Funzione Bottone che elimina le task completate
  bottoneElimina.addEventListener("click", function (event) {
    task.remove();
  });

  nomeTask.value = ""; // ripulisce i campi di input una volta premuto il tasto invio
});
// Esercizio svolto come richiesto.
