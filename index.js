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

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(record => {
        if(record.type === 'childList') {
         todayCount++;
         tomorrowHintCount++;
        }
    })
 });
 observer.observe(date, {attributes: true, childList: true});

const wordles = [
    
    {
        wordle: {
            answer: "trove",
            hint: "Collection of my treasures"
        }
    },
    {
        wordle: {
            answer: "bloke",
            hint: "English man"
        }
    },
    {
        wordle: {
            answer: "vivid",
            hint: "Bright 😎"
        }
    },
    
];

todayWordleAnswer   = wordles[todayCount].wordle.answer;
todayWordleHint     = wordles[todayCount].wordle.hint;
tomorrowWordleHint  = wordles[tomorrowHintCount].wordle.hint;
todayHint.innerHTML = todayWordleHint;



console.log(todayCount, tomorrowHintCount )

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


