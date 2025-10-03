let todos = [];

// Menambahkan todo baru
function addTodo(event) {
  // Mencegah refresh halaman
  event.preventDefault();
  const todoInput = document.getElementById("todo-input");
  const todoDate = document.getElementById("todo-date");
  // validasi input
  if (validateInput(todoInput.value, todoDate.value)) {
    let todo = { task: todoInput.value, date: todoDate.value };
    todos.push(todo);
    // console.log(todos);
    // merender ulang daftar todo
    renderTodos();
  }
}

function renderTodos() {
  const todoList = document.getElementById("todo-list");
  // Hapus isi todoList sebelum merender ulang
  todoList.innerHTML = "";
  // Merender setiap todo
  todos.forEach((todo, index) => {
    todoList.innerHTML += `<li class="border-2 border-indigo-600 rounded-lg flex p-2 mb-2 justify-between items-center shadow-xl">
    <div>
      <p class="font-bold">${todo.task}</p>
      <p class="text-sm text-white">${todo.date}</p>
    </div>
    <button class="bg-red-500 text-white hover:bg-red-700 p-1 rounded" onclick="deleteTodo(${index})">Delete</button>
    </li>`;
  });
}

// Menghapus todo berdasarkan index
function deleteTodo(index) {
  // Menghapus todo dari array berdasarkan index
  todos.splice(index, 1);
  // Merender ulang daftar todo
  renderTodos();
}

// Menghapus semua todo
function deleteAllTodo() {
  todos = [];
  renderTodos();
}

// Filter todos berdasarkan tanggal
function filterTodos() {
  const calendarInput = document.getElementById("calendarInput");
  const selectedDate = calendarInput.value;
  // validasi input tanggal
  if (!selectedDate) {
    alert("Silakan pilih tanggal untuk memfilter.");
    return;
  }
  // Filter todos berdasarkan tanggal yang dipilih
  const filteredTodos = todos.filter((todo) => todo.date === selectedDate);
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  filteredTodos.forEach((todo, index) => {
    todoList.innerHTML += `<li class="border-2 border-indigo-600 rounded-lg flex p-2 mb-2 justify-between items-center shadow-xl">
      <div>
        <p class="font-bold">${todo.task}</p>
        <p class="text-sm text-white">${todo.date}</p>
      </div>
      <button class="bg-red-500 text-white hover:bg-red-700 p-1 rounded" onclick="deleteTodo(${index})">Delete</button>
    </li>`;
  });
}

// validate input fields
function validateInput(todo, date, dateFilter) {
  // Cek apakah input kosong
  if (todo === "" || date === "" || dateFilter === "") {
    // Tampilkan pesan kesalahan
    alert("Tidak boleh ada input yang kosong!");
    return false;
  }
  // Jika validasi berhasil
  return true;
}
