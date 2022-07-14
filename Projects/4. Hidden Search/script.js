const searchBtn = document.getElementById('searchbtn');
const input = document.querySelector('.input');

searchBtn.addEventListener('click', () => {
    // 第一次点击展开搜索框，第二次点击启动搜索功能
    if(searchBtn.classList.contains('focus')){
        alert('开始搜索');
    }else{
        searchBtn.classList.add('focus');
        input.classList.add('focus');
        input.focus();
    }
});

// 离开焦点且搜索框没内容时，折叠搜索框
input.addEventListener('blur', () => {
    if(input.value.length == 0){
        searchBtn.classList.remove('focus');
        input.classList.remove('focus');
    }
});