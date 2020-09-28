const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let Dice, DiceButton;

Dice = new Image();
Dice.src = "images/dice.png";

DiceButton = new Image();
DiceButton.src = "images/dice_button.jpg";

setInterval(animate,10);

// DiceButton.addEventListener('click',()=>
// {
//     context.drawImage(Dice, 0, 0);
// })

function animate()
{
    context.clearRect(0, 0, width, height);
    // context.drawImage(DiceButton, 0, 0);
    context.drawImage(Dice, 0, 0);
}