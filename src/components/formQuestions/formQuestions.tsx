import React from 'react';
import {FormQuestionsI} from "./FormQuestionsI";

function FormQuestions({question, selected, setSelectedAnswer}: FormQuestionsI) {
    const answers = [[
        "Нужны средства для ребёнка меньше 10 лет",
        "Мне меньше 25 лет",
        "От 25 до 35 лет",
        "От 35 до 45 лет",
        "Мне больше 45 лет"],
        [
            "Сухая",
            "Нормальная",
            "Комбинированная",
            "Жирная",
        ],
        [
            "Да",
            "Нет",
            "Иногда",
        ]
    ]
    return (
        <form>
            {answers[question-1].map((item, index) => <div key={index}>
                <label key={index}>
                    <input key={-index} type="radio" name="option"
                           value={index}
                           checked={Number(selected) === index}
                           onChange={(e)=>setSelectedAnswer(e.target.value)}
                    />
                    {item}
                </label><br/>
            </div>)}
        </form>
    );
}

export default FormQuestions;