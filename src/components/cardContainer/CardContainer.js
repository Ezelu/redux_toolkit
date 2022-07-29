import React from 'react';
import CardItem from '../cardItem/CardItem';
import { useSelector } from 'react-redux';
import styles from './CardContainer.module.css';


const CardContainer = () => {

  const { cartItems, total, amount } = useSelector(store => store.cart)


  if (amount < 1 ) {
    return (
      <div className={styles.container}>
        <h1> Cart is Empty! </h1>
        <b> There's nothing to see here :( </b>
      </div>
    )
  }


  return (
    <div className={styles.container}>
      <h1> Items in Cart! </h1>
      <b> Please Checkout your order :) </b>

      <div className={styles.cards}>
        { cartItems.map(item => <CardItem key={item.id} item={item} />) }
      </div>

      <footer>
        <h3> Total </h3>
        <h3> ${total} </h3>  
      </footer>

      <button> Clear Cart </button> 
    </div>
  )
}

export default CardContainer