import classes from './Cart.module.css'
import { Fragment} from 'react';
import { useCart } from 'react-use-cart';

const CartItems =(props)=>{
// const getItem = JSON.parse(localStorage.getItem('itemsTotal'))
const {
  removeItem
} = useCart();



  return (
        <Fragment > 
        <div className={classes.products}>
        <img  src={props.Image}  alt="Images" style={{'width':'100%'}} />
        <div className={classes.container}>
          <p >{props.Name}</p>
          <h4 >Rating:<b>{props.Price}</b></h4>
          <button onClick={() => removeItem(props.id)}>&times;</button>
          {/* <h3>{props.Amount} x </h3> */}
        </div>
      </div>
</Fragment>

    )
};

export default CartItems;