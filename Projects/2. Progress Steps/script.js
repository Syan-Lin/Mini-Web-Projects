const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentStep = 1;

nextBtn.addEventListener('click', () => {
    currentStep++;

    if(currentStep > circles.length) {
        currentStep = circles.length;
    }

    update();
});

prevBtn.addEventListener('click', () => {
    currentStep--;

    if(currentStep < 1) {
        currentStep = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, index) => {
        if(index < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    //进度条进度
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentStep === 1) {
        prev.disabled = true;
    } else if(currentStep === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}