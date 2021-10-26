import classes from './Cart.module.css'
import { Fragment} from 'react';
import {  BiDollar} from "@react-icons/all-files/bi/BiDollar";


const CartItems =(props)=>{
// const getItem = JSON.parse(localStorage.getItem('itemsTotal'))

  return (
        <Fragment > 
        <div className={classes.products}>
        <img  src={props.Image}  alt="Images" style={{'width':'100%'}} />
        <div className={classes.container}>
          <p >{props.Name}</p>
          <h4 >Price:<b><BiDollar/>{props.Price}</b></h4>
          <button onClick={props.onAdd}>+</button>
          <button onClick={props.onRemove}>-</button>
          <h3>{props.Amount} x </h3>
        </div>
      </div>
</Fragment>

    )
};

export default CartItems;