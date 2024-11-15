function colorbutton() {
    document.getElementById('add-question').style.transition = "0.5s all"
    document.getElementById('add-question').style.background = "green"
    document.getElementById('add-question').textContent = "Question (s) added !"

    setTimeout(() => {
        document.getElementById('add-question').style.background = ""
        document.getElementById('add-question').textContent = "Add Question (s)"
    }, 2000)
}

var newquestion;
var correct;
var incorrect1;
var incorrect2;
var incorrect3;

var ToFcorrect;
var writingcorrect;




const quizss = JSON.parse(localStorage.getItem('quizzes-array'))
var diffi;


document.getElementById('creation-button').addEventListener('click', (e) => {
    if (document.getElementById('easy').checked === true) { diffi = "easy" }
    if (document.getElementById('medium').checked === true) { diffi = "medium" }
    if (document.getElementById('hard').checked === true) { diffi = "hard" }


    if (document.getElementById('title').value !== "" && document.getElementById('description').value !== "" && document.getElementById('category').value !== "") {
        const newquiz = {
            informations: {
                title: document.getElementById('title').value,
                difficulty: diffi,
                duration: "3min",
                duration: document.getElementById('description').value,
                categorie: document.getElementById('category').value
            },
            questions: []
        };

        quizss.push(newquiz)
        localStorage.setItem('quizzes-array', JSON.stringify(quizss))
    }

})

quizss.forEach((quiz, index) => {
    const newtitle = document.createElement('option');
    newtitle.textContent = quiz.informations.title
    newtitle.value = index
    document.querySelector('select').appendChild(newtitle)
});

document.getElementById('add-question').addEventListener('click', (e) => {

    const selectedIndex = document.querySelector('select').value
    const selectedQuiz = quizss[selectedIndex]

    if (document.getElementById('question-qcm').value !== '' && document.getElementById('true-answer').value !== '' && document.getElementById('false-answer1').value !== '' && document.getElementById('false-answer2').value !== '' && document.getElementById('false-answer3').value !== '') {
        const newQcm = {
            type: "MQCs",
            question: document.getElementById('question-qcm').value,
            option1: document.getElementById('true-answer').value,
            option2: document.getElementById('false-answer1').value,
            option3: document.getElementById('false-answer2').value,
            option4: document.getElementById('false-answer3').value,
            trueanswer: document.getElementById('correct-answer').value
        };
        selectedQuiz.questions.push(newQcm);
        colorbutton()
    }




    if (document.getElementById('question-ToF').value !== '' && document.getElementById('answer-ToF').value === 'true' || document.getElementById('answer-ToF').value === 'false') {
        const newToF = {
            type: "ToF",
            question: document.getElementById('question-ToF').value,
            trueanswer: document.getElementById('answer-ToF').value,
        }
        selectedQuiz.questions.push(newToF);
        colorbutton()
    }



    if (document.getElementById('question-writing').value !== '' && document.getElementById('answer-writing').value !== '') {
        const newWriting = {
            type: "writing",
            question: document.getElementById('question-writing').value,
            trueanswer: document.getElementById('answer-writing').value
        };
        selectedQuiz.questions.push(newWriting);
        colorbutton()
    }

    localStorage.setItem('quizzes-array', JSON.stringify(quizss))
    document.getElementById('question-qcm').value = ""
    document.getElementById('true-answer').value = ""
    document.getElementById('false-answer1').value = ""
    document.getElementById('false-answer2').value = ""
    document.getElementById('false-answer3').value = ""
    document.getElementById('question-writing').value = ""
    document.getElementById('answer-writing').value = ""
    document.getElementById('question-ToF').value = ""
    document.getElementById('answer-ToF').value = ""

})














document.getElementById('labeleasy').addEventListener('click', () => {
    document.getElementById('labelmedium').style.background = "none"
    document.getElementById('labelhard').style.background = "none"
    document.getElementById('labeleasy').style.background = "rgb(253, 203, 109)"
})

document.getElementById('labelmedium').addEventListener('click', () => {
    document.getElementById('labeleasy').style.background = "none"
    document.getElementById('labelhard').style.background = "none"
    document.getElementById('labelmedium').style.background = "rgb(253, 203, 109)"
})

document.getElementById('labelhard').addEventListener('click', () => {
    document.getElementById('labeleasy').style.background = "none"
    document.getElementById('labelmedium').style.background = "none"
    document.getElementById('labelhard').style.background = "rgb(253, 203, 109)"
})
