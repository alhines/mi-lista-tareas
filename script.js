function agregarTarea() {
  const input = document.getElementById("tareaInput");
  const tarea = input.value.trim();
  if (tarea === "") return;

  const li = document.createElement("li");
  li.textContent = tarea;
  document.getElementById("listaTareas").appendChild(li);
  input.value = "";
}
