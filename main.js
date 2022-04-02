let mainBlock = document.querySelector('.main-block');
let successArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
let count = 0;
let newArr = [];

mainBlock.addEventListener('click', function game(event) {
    if (event.target.className == "mini-block") {
        newArr.push(event.target.value);
        count++;
        if (newArr.join(',') == successArr.slice(0, count).join(',')) {
            event.target.style.backgroundColor = 'green';
        } else {
            event.target.style.backgroundColor = 'red';
            loseGame();
        }
        if (newArr.join(',') == successArr.join(',')) {
            document.querySelector('.container').style.display = "none";
            document.querySelector('.end-game').style.display = "flex";

        }

    };

})

function startGame() {
    document.querySelector('.container').style.display = "flex";
    document.querySelector('.button-start').style.display = "none";
}

function loseGame() {
    document.querySelector('.container').style.display = "none";
    document.querySelector('.lose-game').style.display = "flex";
}

function restartGame() {
    document.querySelector('.lose-game').style.display = "none";
    document.querySelector('.container').style.display = "flex";
    let blocksRed = document.querySelectorAll('.mini-block');
    for (let i = 0; i < blocksRed.length; i++) {
        blocksRed[i].style.backgroundColor = 'bisque';
    }
    count = 0;
    newArr = [];

}