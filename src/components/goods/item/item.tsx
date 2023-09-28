import React, {useState} from 'react';
import styles from './item.module.scss'
import {ItemI} from "./ItemI";

function Item({price, oldPrice, image, title}: ItemI) {
    const [isLiked,setIsLiked]=useState(false);
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={image ? image : ""} alt={"Cosmetic"}/>
                <span className={isLiked?styles.like:styles.unlike} onClick={()=>setIsLiked(prev=>!prev)}>♡</span>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.prices}>
                {oldPrice&&<span className={styles.oldPrice}>{oldPrice}</span>}
                <span className={styles.price}>{price}<small> руб.</small></span>
            </div>
        </div>
    );
}

export default Item;