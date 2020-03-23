let canvas = document.getElementById('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
canvas.style.width = canvas.width + 'px';
canvas.style.height = canvas.height + 'px';
let ctx = canvas.getContext('2d');
let rect = new rectangle(15, 15, 50, 50);
rect.color = new Color(255, 0, 0, 1)
let rect3 = new rectangle(150, 15, 50, 50);
rect3.color = new Color(255, 0, 0, 1)
let rect2 = new rectangle(80, 15, 50, 50);
rect2.color = new Color(0, 255, 0, 1)
let movement = -1;
let tile = new Image();
tile.src = 'tile.png';
let coin = new Image();
coin.src = 'coin.png';
let gold = new Image();
gold.src = 'gold.png';
let bomb = new Image();
bomb.src = 'bomb.png';

setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.drawImage(tile, 0, 450, 100, 40);
ctx.drawImage(tile, 100, 450, 100, 40);
ctx.drawImage(tile, 200, 450, 100, 40);
ctx.drawImage(tile, 300, 450, 100, 40);
ctx.drawImage(tile, 400, 450, 100, 40);
ctx.drawImage(tile, 500, 450, 100, 40);
ctx.drawImage(tile, 100, 350, 50, 30);
ctx.drawImage(tile, 150, 350, 50, 30);
ctx.drawImage(coin, 130, 335, 25, 20);
ctx.drawImage(tile, 200, 300, 50, 30);
ctx.drawImage(tile, 200, 300, 50, 30);
ctx.drawImage(tile, 250, 300, 50, 30);
ctx.drawImage(bomb, 230, 285, 25, 20);
ctx.drawImage(coin, 270, 285, 25, 20);
ctx.drawImage(tile, 320, 250, 50, 30);
ctx.drawImage(tile, 370, 250, 50, 30);
ctx.drawImage(gold, 340, 220, 50, 30);
ctx.drawImage(tile, 450, 300, 50, 30);
ctx.drawImage(tile, 500, 300, 50, 30);

}, 33)