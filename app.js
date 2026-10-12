const formButton = document.getElementById("form-btn");
const todoButton = document.getElementById("todo-btn");
const formPage = document.getElementById("form-page");
const todoPage = document.getElementById("todo-page");

formButton.addEventListener("click", function() {
    formPage.hidden = false;
    todoPage.hidden = true;
    formButton.classList.add("is-active");
    todoButton.classList.remove("is-active");
    formButton.setAttribute("aria-pressed", "true");
    todoButton.setAttribute("aria-pressed", "false");
});

todoButton.addEventListener("click", function() {
    formPage.hidden = true;
    todoPage.hidden = false;
    formButton.classList.remove("is-active");
    todoButton.classList.add("is-active");
    formButton.setAttribute("aria-pressed", "false");
    todoButton.setAttribute("aria-pressed", "true");
});
