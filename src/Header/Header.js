import React, { useContext } from 'react';
// import { Fragment } from 'react';
import {Link} from 'react-router-dom'
import CartContext from '../store/cart-context';
import classes from './Header.module.css'
import {  AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {  ImCart} from "@react-icons/all-files/im/ImCart";


const Header =()=>{
  const getCart= JSON.parse(localStorage.getItem('items'))
  const cartCtx = useContext(CartContext)

  console.log(cartCtx.items)

  if (!getCart || getCart.length=== 0) {
    return (
      <div className={classes.header} >
  <ul>
    <li>
<h2 className={classes.heading}>Shopping.Com </h2>
    </li>
    <li>
    <h3>
      <Link to='/Shopping-Cart/CartItems'><span>Cart <AiOutlineShoppingCart/></span> </Link>  
    </h3>
    </li>
    <li>
    <h3>
      <Link to='/Shopping-Cart'><span>HOME</span> </Link>  
    </h3>
    </li>
  </ul>
</div>
    )
  }


  const numberOfCartItems =  getCart.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  
if (getCart) {
  
return(
<div className={classes.header} >
  <ul>
    <li>
<h2 className={classes.heading}>Shopping.Com </h2>
    </li>
    <li>
    <h3>
      <Link to='/Shopping-Cart/CartItems'><span>Cart <ImCart /> {numberOfCartItems}</span> </Link>  
    </h3>
    </li>
    <li>
    <h3>
      <Link to='/Shopping-Cart'><span>HOME</span> </Link>  
    </h3>
    </li>
  </ul>
</div>
)
};
}
export default Header;