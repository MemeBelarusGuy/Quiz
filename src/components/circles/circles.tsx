import React from 'react';
import styles from './circles.module.scss'
function Circles({question}:{question:number}) {
    return (
        <div className={styles.circles}>
            <div className={question === 1 ? styles.selectedCircle : styles.circle}></div>
            <div className={question === 2 ? styles.selectedCircle : styles.circle}></div>
            <div className={question === 3 ? styles.selectedCircle : styles.circle}></div>
        </div>
    );
}

export default Circles;