let questions=[{
    question:"What country has the highest life expectancy?",
    answers:[
        {text:"canada",correct:"false"},
        {text:"Hongkong",correct:"true"},
        {text:"uk",correct:"false"},
        {text:"us",correct:"false"},
    ]
},
{
    question:"Where would you be if you were standing on the Spanish Steps?",
    answers:[
        {text:"rome",correct:"true"},
        {text:"open",correct:"false"},
        {text:"optical",correct:"false"},
        {text:"order",correct:"false"},
    ]
},
{
    question:"Who was the Ancient Greek God of the Sun",
    answers:[
        {text:"surya",correct:"false"},
        {text:"astra",correct:"false"},
        {text:"appolo",correct:"true"},
        {text:"bagvan",correct:"false"},
    ]
},  
{
    question:"Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
    answers:[
        {text:"sound",correct:"false"},
        {text:"color balance",correct:"false"},
        {text:"high voltage",correct:"false"},
        {text:"remote control",correct:"true"},
    ]
},
{
    question:"Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
    answers:[
        {text:"flash",correct:"true"},
        {text:"flange",correct:"false"},
        {text:"fury",correct:"false"},
        {text:"FRAM",correct:"false"},
    ]
}, 
{
    question:"The purpose of choke in tube light is ?",
    answers:[
        {text:"to increase the current",correct:"false"},
        {text:"to decrease the current",correct:"false"},
        {text:"to increase the voltage momentarily",correct:"true"},
        {text:"to decrease the voltage momentarily",correct:"false"},
    ]
},
{
    question:" 'MPG' extension refers usually to what kind of file?",
    answers:[
        {text:"Animation/movie file",correct:"true"},
        {text:"word perfect documnet file",correct:"false"},
        {text:"image file",correct:"false"},
        {text:"MS Office document",correct:"false"},
    ]
},
{
    question:"Who developed Yahoo?",
    answers:[
        {text:"Dennis Ritchie & Ken Thompson",correct:"false"},
        {text:"David Filo & Jerry Yang",correct:"true"},
        {text:"Vint Cerf & Robert Kahn",correct:"false"},
        {text:"Steve Case & Jeff Bezos",correct:"false"},
    ]
},
{
    question:"Which planet has the most moons? ",
    answers:[
        {text:"earth",correct:"false"},
        {text:"saturn",correct:"true"},
        {text:"neptune",correct:"false"},
        {text:"venus",correct:"false"},
    ]
},
{
    question:"What year was the United Nations established?",
    answers:[
        {text:"1943",correct:"false"},
        {text:"1942",correct:"false"},
        {text:"1945",correct:"true"},
        {text:"1940",correct:"false"},
    ]
},
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex+1;
    questionElement.innerHTML =questionNo+"."+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);


    });

}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="oops!";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
