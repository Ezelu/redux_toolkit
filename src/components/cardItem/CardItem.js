import React from 'react';
import styles from './CardItem.module.css';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'
import { Button, IconButton } from '@mui/material';
import { } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../../features/cart/cartSlice';



const CardItem = ({ item }) => {

  const dispatch = useDispatch();
  const { title, price, id, amount, img } = item;


  return (
    <div className={styles.container}>

      <section className={styles.item}>
        <aside>
          <img src={img} />
        </aside>
        
        <aside>
          <p> {title} </p>
          <p> ${price} </p>
          <Button variant='contained' size='small' onClick={() => dispatch(removeItem(id))}> Remove Item </Button>
        </aside>
      </section>

      <section className={styles.arrow}>
        <IconButton>
          <BiUpArrow onClick={() => dispatch(increase({id}))}/>
        </IconButton>
          {amount}
        <IconButton>
          <BiDownArrow onClick={() => dispatch(decrease({id}))}/>
        </IconButton>
      </section>
    </div>
  )
}

export default CardItem