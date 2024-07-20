function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {  
    const color = getRandomHexColor();
    console.log('zmieniam kolor na', color);

    document.body.style.backgroundColor = color;  
}

let interval;

document.querySelector('[data-start]').addEventListener('click', function () {
    console.log('klikniety start')
    this.disabled = true;
    document.querySelector('[data-stop]').disabled = false;
    changeBackgroundColor();
    interval=setInterval(changeBackgroundColor, 1000);
});

document.querySelector('[data-stop]').addEventListener('click', function(){
    this.disabled = true;
    document.querySelector('[data-start]').disabled = false;
    clearInterval(interval);
});
