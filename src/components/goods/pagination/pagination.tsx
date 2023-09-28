import React, {useState} from 'react';
import styles from "./pagination.module.scss";

function Pagination() {
    const [page, setPage] = useState(1)
    const firstNumber = () => {
        if (page !== 1) setPage(page => page - 1)
    }
    const secondNumber = () => {
        if (page !== 13) setPage(page => page + 1)
    }
    return (
        <div className={styles.pages}>
            <span className={page !== 13 ? styles.selectedPage : ""}
                  onClick={firstNumber}>{page === 13 ? page - 1 : page} </span>
            <span className={page === 13 ? styles.selectedPage : ""} onClick={secondNumber}>
                {page === 13 ? page : page + 1}</span>
            {page < 11 && <span> ...</span>}
            {page <= 11 &&
                <span onClick={() => setPage(13)} className={page === 13 ? styles.selectedPage : ""}> 13</span>}
        </div>
    );
}

export default Pagination;