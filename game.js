const submitButtom = document.querySelector(".guess-num__btn")
const result = document.querySelector(".result")

function playGame() {
    const rangeNum = document.querySelector(".range-num__input")
    const gueesNum = document.querySelector(".guess-num__input")
    const resultGuess = document.querySelector(".result__guess")
    const resultFinal = document.querySelector(".result__final")
    const computerChoice = Math.floor(Math.random() * rangeNum.value)
    result.classList.remove("hidden")
    resultGuess.innerText = `Your choice is ${gueesNum.value} and computer choice is ${computerChoice}.`
    if(parseInt(gueesNum.value) === computerChoice){
        resultFinal.innerText = "You win!"
    } else {
        resultFinal.innerText = "You lose..."
    }

};

submitButtom.addEventListener("click", playGame)