import React from 'react';
import styles from './goods.module.scss'
import cosmetics from './products.json'
import Item from "./item/item";
import Pagination from "./pagination/pagination";

function Goods() {
    const items = cosmetics.map((item,index) =>
        <Item key={index} image={item.image} oldPrice={item.oldPrice} price={item.price} title={item.title}/>)
    return (<>
            <div className={styles.goodsArea}>
                <div className={styles.goodsAreaRow}>
                    {items.slice(0, 5)}
                </div>
                <div className={styles.goodsAreaRow}>
                    {items.slice(5, 10)}
                </div>
                <Pagination/>
            </div>
        </>
    );
}

export default Goods;