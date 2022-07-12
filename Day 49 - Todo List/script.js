const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(function (todo) {
        addTodo(todo);
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener("click", function () {
            todoEl.classList.toggle("completed");
            updateLS();
        });

        todoEl.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });

        todoUL.appendChild(todoEl);
        input.value = "";

        updateLS();
    }
}

function updateLS() {
    let todoEl = document.querySelectorAll("li");
    const todos = [];

    todoEl.forEach(function (todoEl) {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}



// localStorage.setItem("name", JSON.stringify(obj));
// JSON.parse(localStorage.getItem(obj));