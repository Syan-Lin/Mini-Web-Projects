const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const timeText = document.querySelector('.time');
const dateText = document.querySelector('.date');

const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const months = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"];

/* 初始化角度数据 */

let degHour = 0;
let degMinute = 0;
let degSecond = 0;
function initDeg(){
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    /* 初始化完会执行一次setTime(), 所以要消去一次累加 */
    degHour = scale(hours - 1/3600, 0, 24, 0, 360) ;
    degMinute = scale(minutes - 1/60, 0, 60, 0, 360) ;
    degSecond = scale(seconds - 1, 0, 60, 0, 360);
}

/* 更新角度及时间数据 */
function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    degHour += scale(1/3600, 0, 24, 0, 360);
    degMinute += scale(1/60, 0, 60, 0, 360);
    degSecond += scale(1, 0, 60, 0, 360);

    hour.style.transform = `translate(-50%, -100%) rotate(${degHour}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${degMinute}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${degSecond}deg)`;

    timeText.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    dateText.innerHTML = `${months[month]} ${date} 日 ${days[day]}`;
}

/* 计算映射 */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

initDeg();
setTime();

/* 每1000ms执行一次setTime() */
setInterval(setTime, 1000);
