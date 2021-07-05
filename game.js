const submitButtom = document.querySelector(".guess-num__btn")
const result = document.querySelector(".result")
const rangeNum = document.querySelector(".range-num__input")
const gueesNum = document.querySelector(".guess-num__input")
const resultGuess = document.querySelector(".result__guess")
const resultFinal = document.querySelector(".result__final")

function playGame() {
    if (rangeNum.value === "" || gueesNum.value === ""){
        result.classList.remove("hidden")
        resultFinal.classList.add("hidden")
        resultGuess.innerText = "Please wirte a all number!"
    } else {       
        const computerChoice = Math.floor(Math.random() * rangeNum.value)
        result.classList.remove("hidden")
        resultFinal.classList.remove("hidden")
        resultGuess.innerText = `Your choice : ${gueesNum.value}, computer choice : ${computerChoice}.`
        if(parseInt(gueesNum.value) === computerChoice){
            resultFinal.innerText = "You win!"
        } else {
            resultFinal.innerText = "You lose..."
        }
    }
};

submitButtom.addEventListener("click", playGame)
