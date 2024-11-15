
const localquizs = JSON.parse(localStorage.getItem('quizzes-array'))

localquizs.forEach((quiz, index) => {
    const homecard = document.createElement('div');
    homecard.className = "quiz-card";

    const cardicon = document.createElement('img')
    cardicon.src = 'images/icon.svg';
    cardicon.style.position = "absolute"
    cardicon.style.margin = "auto"
    cardicon.style.top = "-50px"
    homecard.appendChild(cardicon)

    const cardtitle = document.createElement('h2');
    cardtitle.textContent = quiz.informations.title;
    homecard.appendChild(cardtitle);

    const cardduration = document.createElement('p');
    cardduration.style.fontFamily = "poppins"
    cardduration.textContent = "Duration: " + quiz.informations.duration;
    homecard.appendChild(cardduration);

    const cardcategorie = document.createElement('p');
    cardcategorie.textContent = "Category: " + quiz.informations.categorie;
    cardcategorie.style.fontFamily = "poppins"
    homecard.appendChild(cardcategorie);

    const carddifficulty = document.createElement('h4');
    carddifficulty.textContent = "Difficulty: " + quiz.informations.difficulty;
    carddifficulty.style.fontFamily = "poppins"
    homecard.appendChild(carddifficulty);

    const cardbutton = document.createElement('button');
    cardbutton.textContent = "Start";
    cardbutton.className = "cardbutton";
    homecard.appendChild(cardbutton);

    document.getElementById('quizzes-container').appendChild(homecard);

    cardbutton.addEventListener('click', () => {
        localStorage.setItem('selectedQuiz', JSON.stringify(quiz));
        localStorage.setItem('index', index);
        window.location.href = 'quiz-inreface.html';
    });
});

document.querySelector('.filter').style.height = "50px"

document.getElementById('arrow').addEventListener('click', () => {

    if (document.querySelector('.filter').style.height === "50px") {
        document.querySelector('.filter').style.height = "170px"
    } else {
        document.querySelector('.filter').style.height = "50px"
    }
})

const cards = document.querySelectorAll('.quiz-card');
const difficulties = document.querySelectorAll('h4');

document.getElementById('easyx').addEventListener('click', () => {
    if (document.getElementById('easyx').checked === true) {
        document.getElementById('easy-div').style.background = "rgb(253, 203, 109)"
    } else {
        document.getElementById('easy-div').style.background = ""
    }
    if (document.getElementById('easyx').checked === true) {
        for (let i = 0; i < cards.length; i++) {
            if (difficulties[i].textContent !== "Difficulty: easy") {
                cards[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            if (difficulties[i].textContent !== "Difficulty: easy") {
                cards[i].style.display = "";
            }
        }
    }
})

document.getElementById('mediumx').addEventListener('click', () => {
    if (document.getElementById('mediumx').checked === true) {
        document.getElementById('med-div').style.background = "rgb(253, 203, 109)"
    } else {
        document.getElementById('med-div').style.background = ""
    }
    if (document.getElementById('mediumx').checked === true) {
        for (let i = 0; i < cards.length; i++) {
            if (difficulties[i].textContent !== "Difficulty: medium") {
                cards[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            if (difficulties[i].textContent !== "Difficulty: medium") {
                cards[i].style.display = "";
            }
        }
    }
})

document.getElementById('hardx').addEventListener('click', () => {
    if (document.getElementById('hardx').checked === true) {
        document.getElementById('hard-div').style.background = "rgb(253, 203, 109)"
    } else {
        document.getElementById('hard-div').style.background = ""
    }
    if (document.getElementById('hardx').checked === true) {
        for (let i = 0; i < cards.length; i++) {
            if (difficulties[i].textContent !== "Difficulty: hard") {
                cards[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            if (difficulties[i].textContent !== "Difficulty: hard") {
                cards[i].style.display = "";
            }
        }
    }
})



document.getElementById('menu-div').addEventListener('click', () => {
    if (document.getElementById('side-bar').style.display === "none") {
        document.getElementById('leave').style.display = "flex"
        document.getElementById('ham-menu').style.display = "none"
        document.getElementById('side-bar').style.display = "flex"
    } else {
            document.getElementById('leave').style.display="none"
    document.getElementById('ham-menu').style.display="flex"
        document.getElementById('side-bar').style.display = "none"
    }
})



