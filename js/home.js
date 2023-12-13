const textElement = document.getElementById('txt');
const btn = document.getElementById('btn1');
  
const colors = ['#333', '#F2C14E'];
const btnCol = ['#F2C14E', '#333'];

let colorIndex = 0;

setInterval(() => {
    textElement.style.color = colors[colorIndex];
    btn.style.backgroundColor = btnCol[colorIndex];
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
}, 1000);