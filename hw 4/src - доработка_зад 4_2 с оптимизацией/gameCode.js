//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok = false;

function quiz(w00, w0, w1, w2) {
    do {//Выводим вопрос

        event = +prompt(w00 + w1 + w2 + '-1 - Выход из игры');

        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(w0, event); // проверка коррректности введенного ответа
            answers.push(new Answer(w00, event)); //массив опроса и ответов пользователя
        }
    } while (!ok);
}

//+++++++++++++++++++++++++++++++++
var answers = []; // массив вопросов и ответов
// console.log(answers); // для проверки
function Answer(question, answerUser) {// запись объекта из вопроса и ответа в массиве
    this.question = question;
    this.answerUser = answerUser;
}
//+++++++++++++++++++++++++++++++++++++

quiz(works.a00, works.a0, works.a1, works.a2);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers[0].mean = works.a1; //++    
        quiz(works.b00, works.b0, works.b1, works.b2);

        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                answers[1].mean = works.b1; //++
                quiz(works.d00, works.d0, works.d1, works.d2);
                if (event == 1) {
                    answers[2].mean = works.d1; //++
                } else {
                    answers[2].mean = works.d2; //++
                }

                break;

            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answers[1].mean = works.b2; //++
                quiz(works.d00, works.d0, works.d1, works.d2);
                if (event == 1) {
                    answers[2].mean = works.d1; //++
                } else {
                    answers[2].mean = works.d2; //++
                }

                break;

            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;

    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers[0].mean = works.a2; //++
        quiz(works.c00, works.c0, works.c1, works.c2);

        switch (event) {
            case 1: // Второе действие
                answers[1].mean = works.c1; //++
                quiz(works.d00, works.d0, works.d1, works.d2);
                if (event == 1) {
                    answers[2].mean = works.d1; //++
                } else {
                    answers[2].mean = works.d2; //++
                }

                break;

            case 2: // Второе действие
                answers[1].mean = works.c2; //++
                quiz(works.d00, works.d0, works.d1, works.d2);
                if (event == 1) {
                    answers[2].mean = works.d1; //++
                } else {
                    answers[2].mean = works.d2; //++
                }

                break;

            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//+++++++++++++++++++++++++++++++++++
// Новый диалог с пользователем: повтор вопроса и демонстрация его ответа
if (answers.length >= 1) {
    recovering(answers.length);
}
alert("Игра завершена");


//++++++++++++++++++++++++++++++++++++

console.log(answers); // для проверки - массив вопросов пользователю и его ответы

function recovering(n) {

    do {//Выводим вопрос

        recover = +prompt("Какой вопрос с Вашим ответом вывести на экран?\nВам было задано " + answers.length + " вопроса" + '\n-1 - Выход из игры');

        if (recover == -1) {
            break;
        }
        else {
            ok = isAnswer(answers.length, recover);
            if (!ok) {
                continue;
            } else {
                alert(answers[recover - 1].question + "\n Ваш ответ "/* + answers[recover - 1].answerUser + " "*/ + answers[recover - 1].mean);
                next = +prompt("Продолжить? \n1 - продолжить \n-1 - Выход из игры");
                if (next == -1) {
                    // alert("Игра завершена")
                    break;
                } else {
                    ok = isAnswer(1, next);

                }


            }

        }
    } while (!ok || next == 1);


}



//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
    return true;

}

//------------------------------------------------