console.log("Hello, World!");

let todos = [];

// Menambahkan todo baru
function addTodo(event) {
  // Mencegah refresh halaman
  event.preventDefault(); 
  
  const todoInput = document.getElementById("todo-input");
  const todoDate = document.getElementById("todo-date");

  // validasi input
  if (validateInput(todoInput.value, todoDate.value)) {
    let todo = ({ task: todoInput.value, date: todoDate.value });
    todos.push(todo);
    console.log(todos);

    // merender ulang daftar todo
    renderTodos();
    
  }
}

function renderTodos() {
  const todoList = document.getElementById("todo-list");
  
  // Hapus isi todoList sebelum merender ulang
  todoList.innerHTML = '';

  // Merender setiap todo
  todos.forEach((todo, index) => {
    todoList.innerHTML += `<li class="border p-2 mb-2 flex justify-between items-center">
    <div>
      <p class="font-bold">${todo.task}</p>
      <p class="text-sm text-gray-500">${todo.date}</p>
    </div>
    <button class="bg-red-500 text-white p-1 rounded" onclick="deleteTodo(${index})">Delete</button>
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

function filterTodos() {

  // menampilkan todo dengan tanggal tertentu
  const filteredTodos = todos.filter(todo => todo.date === '2025-08-10');
  console.log(filteredTodos);
  // Anda bisa menampilkan filteredTodos di UI sesuai kebutuhan
}

// validate input fields
function validateInput(todo, date) {
  // Cek apakah input kosong
  if (todo === '' || date === '') {
    // Tampilkan pesan kesalahan
    alert("Please fill in both fields.");
    return false;
  }
  // Jika validasi berhasil
  return true;
}