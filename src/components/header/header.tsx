import React from 'react';
import styles from './header.module.scss'
import {HeaderI} from "./HeaderI";
function Header({question}:HeaderI) {
    const h1 = ["Онлайн-подбор средств для лица", "Результат"];
    const definition = ["Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов",
        "Мы подобрали для вас более подходящие средства"]
    return (
        <div className={question < 4 ? styles.information : styles.result}>
            <h1>{question < 4 ? h1[0] : h1[1]}</h1>
            <p className={styles.definition}>{question < 4 ? definition[0] : definition[1]}</p>
        </div>
    );
}

export default Header;