let rock = document.querySelector('#r');
let paper = document.querySelector('#p');
let scissors = document.querySelector('#sc');
let myChoice = document.querySelector('#choice');
let ai = document.querySelector('#ai');
let h1 = document.querySelector('#h1');
let air = document.getElementById('1');
let aip = document.getElementById('2');
let ais = document.getElementById('3');
let result = document.getElementById('result');


let aiChoice = Math.floor(Math.random() * 3);

let rockk = () => {
    myChoice.innerText = "You chose ROCK";
    h1.remove();
    paper.remove();
    scissors.remove();
    AIplayer();
    if (aiChoice === 0){
        result.innerText = "IT'S A DRAW!";
    } else if (aiChoice === 1){
        result.innerText = "YOU WON!";
    } else {
        result.innerText = "AI WON!";
    }
}
let paperr = () => {
    myChoice.innerText = "You chose PAPER";
    h1.remove();
    rock.remove();
    scissors.remove();
    AIplayer();
    if (aiChoice === 0){
        result.innerText = "YOU WON!";
    } else if (aiChoice === 1){
        result.innerText = "IT'S A DRAW!";
    } else {
        result.innerText = "AI WON!";
    }
}
let scis = () => {
    myChoice.innerText = "You chose SCISSORS";
    h1.remove();
    rock.remove();
    paper.remove();
    AIplayer();
    if (aiChoice === 0){
        result.innerText = "AI WON!";
    } else if (aiChoice === 1){
        result.innerText = "YOU WON!";
    } else {
        result.innerText = "IT'S A DRAW!";
    }
}

let AIplayer = () => {
    if (aiChoice === 0) {
        ai.innerText = "AI chose ROCK";
        air.style.display = "inline";
    } else if (aiChoice === 1) {
        ai.innerText = "AI chose PAPER";
        aip.style.display = "inline";
    } else if (aiChoice === 2) {
        ai.innerText = "AI chose SCISSORS";
        ais.style.display = "inline";
    }
}

let results = () => {

}

rock.addEventListener("click", rockk);
paper.addEventListener("click", paperr);
scissors.addEventListener("click", scis);