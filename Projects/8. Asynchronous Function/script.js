const text = document.querySelector('.text');
const btn = document.getElementById('btn');

btn.addEventListener('click', getText);

// 页面第一次打开执行一次
getText();

// async和await的异步请求方式
async function getText() {
    // 这里是设置http请求的首部字段
    // Accept的含义是告知对方我们可以接受什么样的数据类型
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };

    // 在async异步函数中，使用await获得数据
    // await只能放在async函数中
    const res = await fetch('https://icanhazdadjoke.com', config);

    // 获得json数据，拿到文字内容
    const data = await res.json()
    text.innerHTML = data.joke
}

// 另一种等价的实现方法
// function getText() {
//     // 这里是设置http请求的首部字段
//     // Accept的含义是告知对方我们可以接受什么样的数据类型
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     };

//     // fetch返回的是Promise对象，可以直接使用then
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         // data就是上一个then中return的对象
//         text.innerHTML = data.joke;
//     })
// }
