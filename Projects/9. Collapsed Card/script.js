const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // toggle函数，如果存在该类则删除，如果不存在则添加
        btn.parentNode.classList.toggle('active');
    })
});
