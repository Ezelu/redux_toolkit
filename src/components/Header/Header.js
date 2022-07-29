import React from 'react';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import {BsFillCartFill} from 'react-icons/bs';
import { Avatar, Badge, IconButton } from '@mui/material'



const Header = () => {

  const { amount } = useSelector(store => store.cart);



  return (
    <div className={styles.container}>
      <section>
        <h1> Redux Header </h1> 
      </section>

      <section>
        <Badge badgeContent={amount} color='secondary' overlap="circular">
          <Avatar 
            sx={{
              background: 'white',
              color: 'darkblue',
              fontSize: '1.5em',
            }}>
            <BsFillCartFill />
          </Avatar>
        </Badge>
      </section>
    </div>
  )
}

export default Header