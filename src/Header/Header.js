import React from 'react';
import { BsBucketFill ,BsBucket} from 'react-icons/bs';
import {Link} from 'react-router-dom'
import classes from './Header.module.css'
import { useCart } from 'react-use-cart';

const Header =()=>{
  const {  totalUniqueItems} = useCart();

const cartStatus = totalUniqueItems === 0|| !totalUniqueItems
  
return(
<div className={classes.header} >
  <ul>
    <li>
<h2 className={classes.heading}>Shopping.Com </h2>
    </li>
    <li>
    <h3>
      <Link to='/Shopping-Cart/CartItems'><span>Cart
        {!cartStatus?<BsBucketFill />:<BsBucket/>}
       {totalUniqueItems?totalUniqueItems:'0'}</span></Link>  
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
export default Header;