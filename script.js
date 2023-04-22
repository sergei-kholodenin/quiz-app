const QuizData = [
    {
        question: 'Какие базы бывают по консистенции?',
        a: 'Жидкие',
        b: 'Средние',
        c: 'Очень густые',
        d: 'Все ответы верны',
        correct: 'd'
    },
    {
        question: 'Какая база подойдёт для длинных ногтей?',
        a: 'Эластичная',
        b: 'Хрупкая',
        c: 'Твёрдая',
        d: 'Смешанная',
        correct: 'c'
    },
    {
        question: 'Какая мощность лампы нужна для того, чтобы просушить чёрный пигментированный гель-лак?',
        a: 'Не менее 48 Ватт',
        b: 'Не менее 36 Ватт',
        c: 'Не менее 24 Ватт',
        d: 'Все варианты подойдут',
        correct: 'a'
    },
    {
        question: 'Что такое кератолитик?',
        a: 'Компоненты, отвечающие за вязкость в акриловой системе',
        b: 'Вещество, вызывающее активное отшелушивание омертвевших клеток с поверхности кожи',
        c: 'Инструмент для педикюра',
        d: 'Восстановление здоровой ногтевой пластины изнутри',
        correct: 'b'
    },
    {
        question: 'Какая абразивность пилок нужна при работе с натуральным ногтем?',
        a: '80',
        b: '100',
        c: '150',
        d: '180',
        correct: 'd'
    },
    {
        question: 'Почему после финального покрытия черный цвет на ногте может «синить»?',
        a: 'Консистенция гель-лак',
        b: 'Химический состав гель-лака',
        c: 'УФ- фильтр топа',
        d: 'Плохая просушка',
        correct: 'c'
    },
    {
        question: 'Что такое праймер?',
        a: 'Средство для сцепки натурального ногтя и искусственного покрытия',
        b: 'Обезжириватель',
        c: 'В разных брендах по-разному',
        d: 'Срезать кутикулу',
        correct: 'a'
    },
    {
        question: 'В чем разница между акригелем и полигелем?',
        a: 'В составе',
        b: 'Один для наращивания, другой для укрепления',
        c: 'Ни в чем',
        d: 'В сроке службы',
        correct: 'c'
    },
    {
        question: 'Что такое гипонихий?',
        a: 'Кожа под кутикулой',
        b: 'Болезнь',
        c: 'Кожа под свободным краем',
        d: 'Неровность ногтевой пластины',
        correct: 'c'
    },
    {
        question: 'В чем разница между сухожаром и автоклавом?',
        a: 'Размер',
        b: 'Способ стерилизации',
        c: 'Скорость стерилизации',
        d: 'Все ответы верные',
        correct: 'd'
    },
];

const quiz = document.querySelector('#quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = QuizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers() {
    answerEls.forEach(item => item.checked = false)
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === QuizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz >= QuizData.length) {
            quiz.innerHTML = `
            <h2>Вы ответили верно на ${score} вопросов из ${QuizData.length}.</h2>
            `;
        }
        loadQuiz();
    }  
})