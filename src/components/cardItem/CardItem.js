import React from 'react';
import styles from './CardItem.module.css';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'



const CardItem = ({ item }) => {
  console.log(item)

  return (
    <div className={styles.container}>

      <section className={styles.item}>
        <aside>
          <img src={item.img} />
        </aside>
        
        <aside>
          <p> {item.title} </p>
          <p> ${item.price} </p>
        </aside>
      </section>

      <section className={styles.arrow}>
        <BiUpArrow />
          { item.amount}
        <BiDownArrow />
      </section>
    </div>
  )
}

export default CardItem