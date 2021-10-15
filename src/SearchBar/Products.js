import classes from './Products.module.css'
import { Fragment, useContext,  useState} from 'react';
import CartContext from '../store/cart-context';


const Products =(props)=>{
  const cartCtx = useContext(CartContext)
  const [touched, settouched] = useState(true)

    localStorage.setItem('itemsTotal',JSON.stringify(cartCtx.totalAmount))
         localStorage.setItem('items',JSON.stringify(cartCtx.items))
  
  
  const addItemToCartHandler = ((item) => {
    item.preventDefault()
    cartCtx.addItem(
      {
        id:(props.id),
        Name:props.Name,
        Price:props.price,
        Image:props.thumbnail,
        amount:cartCtx.addItem.length,
        totalAmount:cartCtx.totalAmount
         })
           
         return settouched(false)
        })
        


  return (
        <Fragment>
        <div className={classes.products}>
          <h2>{props.Name}</h2>
        <img src={props.thumbnail}  alt="Avatar" style={{'width':'100%'}} />
        <div className={classes.container}>
          <h4><b> ${props.price}</b></h4>
          <p>{props.Name}</p>
       {touched && <button onClick={addItemToCartHandler} >Add To Cart</button>}
       {!touched  && <p>Already In Cart</p>}
        </div>
      </div>
      </Fragment>

    )
};

export default Products;