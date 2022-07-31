import { useEffect } from "react";
import CardContainer from "./components/cardContainer/CardContainer";
import Header from "./components/Header/Header";
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import { LinearProgress } from '@mui/material';



function App() {

  const { cartItems, isLoading } = useSelector(state => state.cart);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch( calculateTotals() )
  }, [ cartItems ])


  useEffect(() => {
    dispatch( getCartItems('name') )
  }, [])
  




  return (
    <div className="App">
      <Header />
      { isLoading ? <LinearProgress /> : <CardContainer /> }
    </div> 
  );
}

export default App;
