/*
function result(a, b) {
    let sum = a + b;
    return sum;
    console.log(sum)
}

let newResult = result(5, 10);
console.log(newResult);

function subArray(num1, num2) {
    const array1 = num1 + num2;
    return array1;
}

const array = subArray(45, 67);
console.log(array);
*/

//--------------Translation Test---------------

//functions

function helloMessage(_notificationMassages) {
    alert(_notificationMassages.start.greeting)
}
function training(_words, _result, _wrongAnswers) {
    for (let i = 0; i < _words.length; i++ ){
        let userAnswer = prompt(_words[i].original);
        alert(userAnswer === _words[i].translation);
        if (userAnswer === _words[i].translation) {
            _result.correctAnswerCount = _result.correctAnswerCount + 1
        }else {
            _wrongAnswers.push(userAnswer);
        }
    }
}
function results(_settings,_words, _wrongAnswers,_result, _notificationMassages) {
    let userResult = _result.correctAnswerCount / _words.length * 100;
    if (userResult >= _settings.requiredMin ) {
        alert(_notificationMassages.result.finishSuccess)
    }else {
        alert(_notificationMassages.result.finishFailed)
    }

}
function testYourself(_words,){
    let translations = words.map(word => word.translation)
    {
        for (let translation of translations) {
        }
    }
    document.write("Correct translation:" + translations + "<br>")
    document.write("Your answers: " + wrongAnswers)
}

//data

let words = [
    {
        original: "Guess",
        translation: "Угадай"
    },
    {
        original: "How",
        translation: "Как"
    },
    {
        original: "Therefore",
        translation: "Поэтому"
    },
    {
        original: "laptop",
        translation: "Ноутбук"
    },
    {
        original: "Friend",
        translation: "Друг"
    }

];
let wrongAnswers = [
];

const notificationMassages = {
    result: {
        finishSuccess: "Good job!",
        finishFailed: "You need more practise"
    },
    start: {
        greeting: "Hello, try to pass the test"
    }
}
const settings = {
    requiredMin: 50
}
const result = {
    correctAnswerCount: 0
}

//main program

helloMessage(notificationMassages);
training(words, result, wrongAnswers);
results(settings, words, wrongAnswers, result, notificationMassages);
testYourself(words);