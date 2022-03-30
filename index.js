const date               = document.querySelector("#currentDate");
const now                = moment().format("dddd, MMMM Do");
const currentTime        = moment().format("kk:mm:ss");
const todayHint          = document.querySelector("#today-hint");
const wordle             = document.querySelector("#wordle");
const tomorrowHint       = document.querySelector("#tomorrow-hint");
const wordleAnswer       = document.querySelector("#wordle-answer");
const tomorrowHintReveal = document.querySelector("#tomorrow-hint-reveal");
let todayCount           = 0;
let tomorrowHintCount    = 1;

date.append(now);


// const observer = new MutationObserver(function(mutations) {
//     console.log(mutations)
//  });
//  observer.observe(date, {attributes: true, childList: true});

//  setTimeout(() => {
//     date.innerHTML = "Tuesday, February 24th";
//  }, 5000);

//  console.log(todayCount)

const wordles = [
    {
        wordle: {
            answer: "stove",
            hint: "a heated chamber (not the chamber you're thinking)"
        }
    },
    {
        wordle: {
            answer: "lowly",
            hint: "humble"
        }
    },
    
];

todayWordleAnswer   = wordles[todayCount].wordle.answer;
todayWordleHint     = wordles[todayCount].wordle.hint;
tomorrowWordleHint  = wordles[tomorrowHintCount].wordle.hint;
todayHint.innerHTML = todayWordleHint;

const displayWordle = () => {
    wordle.style.display = "none";
    wordleAnswer.innerText = todayWordleAnswer.toUpperCase();
};

const displayTomorrowHint = () => {
    tomorrowHint.style.display = "none";
    tomorrowHintReveal.innerText = tomorrowWordleHint.toUpperCase();
};

wordle.addEventListener('click', displayWordle);
tomorrowHint.addEventListener('click', displayTomorrowHint);




