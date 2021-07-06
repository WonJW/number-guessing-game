const range = document.querySelector(".range-num__input")
const guess = document.querySelector(".guess-num__input")
const submitButtom = document.querySelector(".numbers")
const result = document.querySelector(".result")
const resultGuess = document.querySelector(".result__guess")
const resultFinal = document.querySelector(".result__final")
const HIDDEN_CLASSNAME = "hidden"


function playGame(event) {
    event.preventDefault();
    const rangeNum = range.value
    const guessNum = guess.value
    if (parseInt(rangeNum) < parseInt(guessNum)) {
        result.classList.remove(HIDDEN_CLASSNAME)
        resultFinal.classList.add(HIDDEN_CLASSNAME)
        resultGuess.innerText = "Your guess number is bigger than range number!"
    } else {       
        const computerChoice = Math.floor(Math.random() * rangeNum)
        result.classList.remove(HIDDEN_CLASSNAME)
        resultFinal.classList.remove(HIDDEN_CLASSNAME)
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