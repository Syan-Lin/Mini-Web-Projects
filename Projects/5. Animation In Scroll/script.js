const cards = document.querySelectorAll('.card');

// window.innerHeight: 视窗高度
// 设置让卡片在什么地方开始显示(Debug模式下的红线)
const trigger = window.innerHeight - 100;
isDebug = false;

// 载入网页时执行一遍，显示可视范围内的卡片
checkCards();

/* 页面滚动时执行 */
window.addEventListener('scroll', checkCards);
function checkCards() {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(isDebug){
            card.getElementsByTagName('p')[0].innerHTML = '距离视窗顶部：' + parseInt(cardTop);
        }else{
            card.getElementsByTagName('p')[0].innerHTML = '这是一张卡片';
        }

        // 如果在可视范围内就显示，否则隐藏
        if(cardTop < trigger) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

/* 调试按钮事件 */
function clickDebug(){
    const line = document.querySelector('.line');
    if(!isDebug){
        line.style.setProperty('opacity', '1');
        line.style.setProperty('top', trigger + 'px');
    }else{
        line.style.setProperty('opacity', '0');
    }
    isDebug = !isDebug;
    checkCards();   // 刷新文字内容
}