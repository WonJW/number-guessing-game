const range = document.querySelector(".range-num__input")
const guess = document.querySelector(".guess-num__input")
const submitButtom = document.querySelector(".guess-num__btn")
const result = document.querySelector(".result")
const resultGuess = document.querySelector(".result__guess")
const resultFinal = document.querySelector(".result__final")


function playGame() {
    const rangeNum = range.value
    const guessNum = guess.value
    if (rangeNum === "" || guessNum === "") {
        result.classList.remove("hidden")
        resultFinal.classList.add("hidden")
        if (rangeNum === "" && guessNum === "") {
            resultGuess.innerText = "Please wirte a all number!"
        } else if (rangeNum === ""){
            resultGuess.innerText = "Please wirte a range number!"
        } else {
            resultGuess.innerText = "Please wirte a guess number!"
        }  
    } else if (parseInt(rangeNum) < parseInt(guessNum)) {
        result.classList.remove("hidden")
        resultFinal.classList.add("hidden")
        resultGuess.innerText = "Your guess number is bigger than range number!"
    } else {       
        const computerChoice = Math.floor(Math.random() * rangeNum)
        result.classList.remove("hidden")
        resultFinal.classList.remove("hidden")
        resultGuess.innerText = `Your choice : ${guessNum}, computer choice : ${computerChoice}.`
        if(parseInt(guessNum) === computerChoice){
            resultFinal.innerText = "You win!"
        } else {
            resultFinal.innerText = "You lose..."
        }
    }
};

submitButtom.addEventListener("click", playGame)
