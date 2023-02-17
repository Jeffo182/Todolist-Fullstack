const fetchTasks = async () => {
  const response = await fetch("http://localhost:3333/tasks");
  const tasks = await response.json();
  return tasks;
};
const inputTask = document.querySelector(".input-task");
const addForm = document.querySelector(".add-form");

const addTask = async (event) => {
  event.preventDefault();

  const task = { title: inputTask.value };

  await fetch("http://localhost:3333/tasks", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  loadTasks();
  inputTask.value = '';
};

const deleteTask = async (id) => {
  await fetch(`http://localhost:3333/tasks/${id}`, {
    method: 'delete',
  });

  loadTasks();
}

const updateTask = async ({ id, title, status }) => {

  await fetch(`http://localhost:3333/tasks/${id}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, status }),
  });

  loadTasks();
}

const tbody = document.querySelector("tbody");

const formatDate = (dateUTC) => {
  const options = { dateStyle: 'long', timeStyle: 'short' };
  const date = new Date(dateUTC).toLocaleString('pt-br', options);
  return date;
}

const createElement = (tag, innerText = "", innerHTML = "") => {
  const element = document.createElement(tag);
  if (innerText) {
    element.innerText = innerText;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  return element;
};

const createSelect = (value) => {
  const options = `<option value="Pendente">Pendente</option>
  <option value="Em andamento">Em andamento</option>
  <option value="Concluida">Concluida</option>`;
  const select = createElement("select", "", options);
  const maiuscula = value[0].toUpperCase() + value.substr(1);
  select.value = maiuscula;
  return select;
};

const task = {
  id: 1,
  title: "testando",
  created_at: "00 janeiro de 2023",
  status: "pendente",
};

const createRow = (task) => {
  const { id, title, created_at, status } = task;
  const tr = document.createElement("tr");
  const tdTitle = createElement("td", title);
  const tdCreatedAt = createElement("td", formatDate(created_at));
  const tdStatus = createElement("td");
  const tdActions = createElement("td");
  const select = createSelect(status);

  select.addEventListener('change', ({target}) => updateTask({ ...task, status: target.value}))
  const editButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined"> edit_note </span>'
  );
  const deleteButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined"> delete </span>'
  );

  const editForm = createElement('form');
  const editInput = createElement('input');
  editInput.value = title;
  editForm.appendChild(editInput);


  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    updateTask({ id, title: editInput.value, status });
  })

  editButton.addEventListener('click', () => {
    tdTitle.innerText = '';
    tdTitle.appendChild(editForm);
  })

  editButton.classList.add("btn-action");
  deleteButton.classList.add("btn-action");

  tdStatus.appendChild(select);

  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  tr.appendChild(tdTitle);
  tr.appendChild(tdCreatedAt);
  tr.appendChild(tdStatus);
  tr.appendChild(tdActions);
  // tbody.appendChild(tr);
  return tr;
};
// createRow(task);

const loadTasks = async () => {
  const tasks = await fetchTasks();

  tbody.innerHTML = '';

  tasks.forEach((task) => {
    const tr = createRow(task);
    tbody.appendChild(tr);
  });
};

addForm.addEventListener("submit", addTask);

loadTasks();
