
let Nav = document.querySelector(".dashboard");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");

let game = 'X';

function play(id) {
    let objct = document.getElementById(id);

    if (game === 'X' && objct.innerHTML === '') {
        objct.innerHTML = 'X';
        game = 'O';
        Nav.innerHTML = 'O';
    } else if (game === 'O' && objct.innerHTML === '') {
        objct.innerHTML = 'O';
        game = 'X';
        Nav.innerHTML = "X";
    }
    win();
}

function win() {
    if (item1.innerHTML === item2.innerHTML && item2.innerHTML === item3.innerHTML && item3.innerHTML !== '') {
        Nav.innerHTML = `${item1.innerHTML} WINNER`;
        item1.style.backgroundColor = '#fff';
        item2.style.backgroundColor = '#fff';
        item3.style.backgroundColor = '#fff';
        item1.style.color = '#000';
        item2.style.color = '#000';
        item3.style.color = '#000';
  
       
        setTimeout(() => {
            resetGame();
        }, 3000);
    } else if (item4.innerHTML === item5.innerHTML && item5.innerHTML === item6.innerHTML && item6.innerHTML !== '') {
        Nav.innerHTML = `${item4.innerHTML} WINNER`;
        item4.style.backgroundColor = '#fff';
        item5.style.backgroundColor = '#fff';
        item6.style.backgroundColor = '#fff';
        item4.style.color = '#000';
        item5.style.color = '#000';
        item6.style.color = '#000';
       
        setTimeout(() => {
            resetGame();
        }, 4000);
    } else if (item7.innerHTML === item8.innerHTML && item8.innerHTML === item9.innerHTML && item9.innerHTML !== '') {
        Nav.innerHTML = `${item9.innerHTML} WINNER`;
        item7.style.backgroundColor = '#fff';
        item8.style.backgroundColor = '#fff';
        item9.style.backgroundColor = '#fff';
        item7.style.color = '#000';
        item8.style.color = '#000';
        item9.style.color = '#000';
        setTimeout(() => {
            resetGame();
        }, 4000);
    } else if (item1.innerHTML === item4.innerHTML && item4.innerHTML === item7.innerHTML && item7.innerHTML !== '') {
        Nav.innerHTML = `${item1.innerHTML} WINNER`;
        item1.style.backgroundColor = '#fff';
        item4.style.backgroundColor = '#fff';
        item7.style.backgroundColor = '#fff';
        item1.style.color = '#000';
        item4.style.color = '#000';
        item7.style.color = '#000';
        setTimeout(() => {
            resetGame();
        }, 4000);
    } else if (item2.innerHTML === item5.innerHTML && item5.innerHTML === item8.innerHTML && item8.innerHTML !== '') {
        Nav.innerHTML = `${item2.innerHTML} WINNER`;
        item2.style.backgroundColor = '#fff';
        item5.style.backgroundColor = '#fff';
        item8.style.backgroundColor = '#fff';
        item2.style.color = '#000';
        item5.style.color = '#000';
        item8.style.color = '#000';
        setTimeout(() => {
            resetGame();
        }, 4000);
    } else if (item3.innerHTML === item6.innerHTML && item6.innerHTML === item9.innerHTML && item9.innerHTML !== '') {
        Nav.innerHTML = `${item9.innerHTML} WINNER`;
        item3.style.backgroundColor = '#fff';
        item6.style.backgroundColor = '#fff';
        item9.style.backgroundColor = '#fff';
        item3.style.color = '#000';
        item6.style.color = '#000';
        item9.style.color = '#000';
        setTimeout(() => {
            resetGame();
        }, 4000);
    } else if (item1.innerHTML === item5.innerHTML && item5.innerHTML === item9.innerHTML && item9.innerHTML !== '') {
        Nav.innerHTML = `${item5.innerHTML} WINNER`;
        item1.style.backgroundColor = '#fff';
        item5.style.backgroundColor = '#fff';
        item9.style.backgroundColor = '#fff';
        item1.style.color = '#000';
        item5.style.color = '#000';
        item9.style.color = '#000';
        setTimeout(() => {
            resetGame();
        }, 4000);
    } else if (item3.innerHTML === item5.innerHTML && item5.innerHTML === item7.innerHTML && item7.innerHTML !== '') {
        Nav.innerHTML = `${item3.innerHTML} WINNER`;
        item3.style.backgroundColor = '#fff';
        item5.style.backgroundColor = '#fff';
        item7.style.backgroundColor = '#fff';
        item3.style.color = '#000';
        item5.style.color = '#000';
        item7.style.color = '#000';
        setTimeout(() => {
            resetGame();
        }, 4000);
    }
}

function resetGame() {
    item1.innerHTML = '';
    item2.innerHTML = '';
    item3.innerHTML = '';
    item4.innerHTML = '';
    item5.innerHTML = '';
    item6.innerHTML = '';
    item7.innerHTML = '';
    item8.innerHTML = '';
    item9.innerHTML = '';

    item1.style.backgroundColor = '';
    item2.style.backgroundColor = '';
    item3.style.backgroundColor = '';
    item4.style.backgroundColor = '';
    item5.style.backgroundColor = '';
    item6.style.backgroundColor = '';
    item7.style.backgroundColor = '';
    item8.style.backgroundColor = '';
    item9.style.backgroundColor = '';
    Nav.innerHTML=''

    item1
}
