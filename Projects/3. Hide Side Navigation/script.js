const open = document.getElementById('open');
const close = document.getElementById('close');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

open.addEventListener('click', () => {
    open.classList.remove('show');
    close.classList.add('show');
    sidebar.classList.add('show');
    content.classList.add('show');
});

close.addEventListener('click', () => {
    close.classList.remove('show');
    open.classList.add('show');
    sidebar.classList.remove('show');
    content.classList.remove('show');
});