import classes from './Cart.module.css'
import { Fragment, useContext} from 'react';
import CartContext from '../store/cart-context';


const CartItems =(props)=>{
const getItem = JSON.parse(localStorage.getItem('itemsTotal'))
const cartCtx = useContext(CartContext)
console.log(cartCtx.totalAmount)
  return (
        <Fragment > 
        <div className={classes.products}>
        <img  src={props.Image}  alt="Images" style={{'width':'100%'}} />
        <div className={classes.container}>
          <h4 ><b>💲{props.Price}</b></h4>
          <p >{props.Name}</p>
          <button onClick={props.onAdd}>+</button>
          <button onClick={props.onRemove}>-</button>
          <h3>{props.Amount} x </h3>
        </div>
  <h3>Total:💲{getItem}</h3>
      </div>

</Fragment>

    )
};

export default CartItems;