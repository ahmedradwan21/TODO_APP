document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-button');
    const editInputs = document.querySelectorAll('.edit-todo-input');
    const todoTexts = document.querySelectorAll('.todo-text span');

    editButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            editInputs[index].style.display = 'inline-block';
            todoTexts[index].style.display = 'none';
            editInputs[index].focus();
        });
    });

    editInputs.forEach((input, index) => {
        input.addEventListener('blur', () => {
            todos[index] = input.value.trim();
            res.redirect('/');
        });
    });
});
