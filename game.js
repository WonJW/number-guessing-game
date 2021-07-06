const range = document.querySelector(".range-num__input")
const guess = document.querySelector(".guess-num__input")
const submitButtom = document.querySelector(".numbers")
const result = document.querySelector(".result")
const resultGuess = document.querySelector(".result__guess")
const resultFinal = document.querySelector(".result__final")


function playGame(event) {
    event.preventDefault();
    const rangeNum = range.value
    const guessNum = guess.value
    if (parseInt(rangeNum) < parseInt(guessNum)) {
        result.classList.remove("hidden")
        resultFinal.classList.add("hidden")
        resultGuess.innerText = "Your chosse number is bigger than range number!"
    } else {       
        const computerChoice = Math.floor(Math.random() * rangeNum)
        result.classList.remove("hidden")
        resultFinal.classList.remove("hidden")
        resultGuess.innerText = `Your choice : ${guessNum}, computer choice : ${computerChoice}.`
        if(parseInt(guessNum, 10) === computerChoice){
            resultFinal.innerText = "You win!"
        } else {
            resultFinal.innerText = "You lose..."
        }
    }
};

if (range.value != null && guess.value != null){
    submitButtom.addEventListener("submit", playGame);
}