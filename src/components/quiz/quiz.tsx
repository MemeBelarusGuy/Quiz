import React, {useState} from 'react';
import styles from "./quiz.module.scss";
import Circles from "../circles/circles";
import FormQuestions from "../formQuestions/formQuestions";
import {QuizI} from "./QuizI";

function Quiz({question, setQuestion}: QuizI) {
    const questions = ["Сколько вам лет?", "Какой у вас тип кожи?", "Беспокоят ли воспаления на лице?"];
    const [userAnswer1, setUserAnswer1] = useState(-1);
    const [userAnswer2, setUserAnswer2] = useState(-1);
    const [userAnswer3, setUserAnswer3] = useState(-1);
    const nextQuestion = () => {
        if (question === 3 && (userAnswer1 === -1 || userAnswer2 === -1 || userAnswer3 === -1)) {
            alert("Ответьте на все вопросы!")
        } else setQuestion(question+1)
    }
    const previousQuestion = () => {
        if (question !== 1) setQuestion(question-1)
    }
    return (
        <div className={styles.questionArea}>
            <Circles question={question}/>
            <p className={styles.questionNumber}>Вопрос {question} из 3</p>
            <span className={styles.question}>{questions[question - 1]}</span>
            <FormQuestions selected={question === 1 ? userAnswer1 : question === 2 ? userAnswer2 : userAnswer3}
                           setSelectedAnswer={question === 1 ? setUserAnswer1 : question === 2 ? setUserAnswer2 : setUserAnswer3}
                           question={question}/>
            <div className={styles.pagination}>
                {question !== 1 && <button className={styles.previous} onClick={previousQuestion}>Назад</button>}
                <button className={styles.next} onClick={nextQuestion}>{question === 3 ? "Узнать результат"
                    : "Дальше"}</button>
            </div>
        </div>
    );
}

export default Quiz;