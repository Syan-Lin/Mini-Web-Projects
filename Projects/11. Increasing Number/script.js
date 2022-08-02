const counters = document.querySelectorAll('.number');

counters.forEach(counter => {
    counter.innerText = 0;

    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const number = parseInt(counter.innerText);

        const increment = target / 200;

        if(number < target) {
            //取整数
            counter.innerText = Math.ceil(number + increment);
            //在4毫秒之后调用updateCounter，HTML5中规定setTimeout最短时间是4毫秒
            setTimeout(updateCounter, 4);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
});
