const timerspan = document.getElementById('timerspan');
const correctanswerspan = document.getElementById('correctanswerspan')
const incorrectanswersspan = document.getElementById('incorrectanswersspan')
const recordspan = document.getElementById('recordspan')
const Quiztitle = document.getElementById('Quiz-title')
const finalscorespan = document.getElementById('finalscorespan')
const currentscore = document.getElementById('scorespan')
const currentquestion = document.getElementById('questionsspan')


var i = 0;
var j = 30;
var correct = 0;
var incorrect;
var score = 0;
var recordscore = 0;





document.addEventListener("DOMContentLoaded", () => {
    function decrementation() {
        timerInterval = setInterval(() => {
            j--;
            if (j >= 0) {
                timerspan.textContent = j + "s";
            } else {
                timerspan.textContent = "time out!";
                j = 31
                setTimeout(() => {
                    i++;
                    renderQuestion()
                }, 700)
            }
        }, 1000);
    }


    const selectedQuiz = JSON.parse(localStorage.getItem('selectedQuiz'));
    Quiztitle.textContent = selectedQuiz.informations.title

    const quizindex = localStorage.getItem('index')
    decrementation();
    const renderQuestion = () => {


        var barwidth = ((i) * 100) / selectedQuiz.questions.length
        document.querySelector('.bar').style.width = barwidth + "%"

        const question = selectedQuiz.questions[i];
        const questionContainer = document.querySelector('.show-question');
        questionContainer.innerHTML = '';

        if (i >= selectedQuiz.questions.length) {
            document.querySelector('.stats').style.display = "none"
            document.querySelector('.results').style.display = ""
            document.querySelector('.buttons-results').style.display=""
            document.querySelector('.review').style.display=""
            return;
        }

        const questionandoptions = document.createElement('div');
        questionandoptions.className = "question-options";

        const questionDiv = document.createElement('div');
        questionDiv.className = "question";

        const questionText = document.createElement('h1');
        questionText.textContent = question.question;
        questionDiv.appendChild(questionText);
        questionandoptions.appendChild(questionDiv);

        if (question.type === "MQCs") {
            currentquestion.textContent = i + 1 + "/" + selectedQuiz.questions.length

            const optionsDiv = document.createElement('div');
            optionsDiv.className = "options";

            const option1 = document.createElement('button');
            option1.textContent = question.option1;
            option1.className = "option";

            const option2 = document.createElement('button');
            option2.textContent = question.option2;
            option2.className = "option";

            const option3 = document.createElement('button');
            option3.textContent = question.option3;
            option3.className = "option";

            const option4 = document.createElement('button');
            option4.textContent = question.option4;
            option4.className = "option";

            optionsDiv.appendChild(option1);
            optionsDiv.appendChild(option2);
            optionsDiv.appendChild(option3);
            optionsDiv.appendChild(option4);
            questionandoptions.appendChild(optionsDiv);

            const options = [option1, option2, option3, option4];
            options.forEach(element => {

                element.addEventListener('click', () => {

                    if (element.textContent === question.trueanswer) {
                        element.style.background = "green";
                        score = score + 15;
                        finalscorespan.textContent = score
                        currentscore.textContent = score
                        if (score > recordscore) {
                            recordscore = score
                            localStorage.setItem('record' + quizindex, recordscore)
                        }
                        correct++;
                        correctanswerspan.textContent = correct
                        incorrectanswersspan.textContent = selectedQuiz.questions.length - correct
                    } else {
                        element.style.background = "red";
                        for (k = 0; k < 4; k++) {
                            if (options[k].textContent === question.trueanswer) {
                                options[k].style.background = "green";
                                break;
                            }
                        }
                    }
                    i++;
                    j = 31;
                    setTimeout(() => {
                        renderQuestion();
                    }, 1000);
                });
            });
        }

        if (question.type === "ToF") {
            currentquestion.textContent = i + 1 + "/" + selectedQuiz.questions.length
            const optionsDiv = document.createElement('div');
            optionsDiv.className = "options";

            const trueButton = document.createElement('button');
            trueButton.textContent = "True";
            trueButton.classList.add("ToF-buttons");

            const falseButton = document.createElement('button');
            falseButton.textContent = "False";
            falseButton.classList.add("ToF-buttons");

            optionsDiv.appendChild(trueButton);
            optionsDiv.appendChild(falseButton);

            questionandoptions.appendChild(optionsDiv);

            trueButton.addEventListener('click', () => {
                if (trueButton.textContent === question.trueanswer) {
                    trueButton.style.background = 'green';
                    score = score + 10;
                    finalscorespan.textContent = score
                    currentscore.textContent = score
                    if (score > recordscore) {
                        recordscore = score
                        localStorage.setItem('record' + quizindex, recordscore)
                    }
                    correct++;
                    correctanswerspan.textContent = correct
                    incorrectanswersspan.textContent = selectedQuiz.questions.length - correct
                } else {
                    trueButton.style.background = 'red';
                    falseButton.style.background = 'green';
                }
                i++;
                j = 31;
                setTimeout(() => {
                    renderQuestion();
                }, 1000);
            });

            falseButton.addEventListener('click', () => {
                if (falseButton.textContent === question.trueanswer) {
                    falseButton.style.background = 'green';
                    score = score + 10;
                    finalscorespan.textContent = score
                    currentscore.textContent = score
                    if (score > recordscore) {
                        recordscore = score
                        localStorage.setItem('record' + quizindex, recordscore)
                    }
                    correct++;
                    correctanswerspan.textContent = correct
                    incorrectanswersspan.textContent = selectedQuiz.questions.length - correct
                } else {
                    falseButton.style.background = 'red';
                    trueButton.style.background = 'green';
                }
                i++;
                j = 31;
                setTimeout(() => {
                    renderQuestion();
                }, 1000);
            });
        }

        if (question.type === "writing") {
            currentquestion.textContent = i + 1 + "/" + selectedQuiz.questions.length
            const optionsDiv = document.createElement('div');
            optionsDiv.className = "last-option";

            const inputField = document.createElement('textarea');
            inputField.placeholder = "Your answer here...";
            inputField.className = "txtareaanswer";

            const SubmitButton = document.createElement('button');
            SubmitButton.className = "writingSubmit";
            SubmitButton.textContent = "Submit";

            optionsDiv.appendChild(inputField);
            optionsDiv.appendChild(SubmitButton);
            questionandoptions.appendChild(optionsDiv);

            SubmitButton.addEventListener('click', () => {
                const textvalue = inputField.value.toLowerCase();
                if (textvalue === question.trueanswer.toLowerCase()) {
                    SubmitButton.style.background = "green";
                    score = score + 42;
                    finalscorespan.textContent = score
                    currentscore.textContent = score
                    if (score > recordscore) {
                        recordscore = score
                        localStorage.setItem('record' + quizindex, recordscore)
                    }
                    correct++;
                    correctanswerspan.textContent = correct
                    incorrectanswersspan.textContent = selectedQuiz.questions.length - correct
                } else {
                    SubmitButton.style.background = "red";
                }
                i++;
                j = 31;
                setTimeout(() => {
                    renderQuestion();
                }, 1000);
            });
        }


        questionContainer.appendChild(questionandoptions);
    };

    renderQuestion();
    recordspan.textContent = localStorage.getItem('record' + quizindex)
});

function reload() {
    window.location.href = 'quiz-inreface.html'
}
function home() {
    window.location.href = 'index.html'
}

var resultsdiv = document.getElementById('share-results');

function htmltoimg(){
domtoimage.toPng(resultsdiv).then(function (dataUrl){

    document.getElementById('showImg').src = dataUrl;
    imgUrl = dataUrl;
    document.getElementById('share-img').style.display=""
})

}

function shareimg(){
    var a =document.createElement('a')
    a.href = imgUrl;
    a.download = "htmltoimg.jpg"
    a.click();
}
