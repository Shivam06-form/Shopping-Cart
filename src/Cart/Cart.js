import { useContext } from 'react';
import CartContext from '../store/cart-context';
import CartItems from './CartItems';

const Cart =()=>{
  const cartCtx = useContext(CartContext)
  localStorage.setItem('items',JSON.stringify(cartCtx.items))
  localStorage.setItem('itemsTotal',JSON.stringify(cartCtx.totalAmount))
  let {items}= cartCtx
console.log(items)  
const getItem  =  JSON.parse(localStorage.getItem('items'))

  const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
       cartCtx.addItem({ ...item, amount: 1 });
      };
      
      






const CartItem = getItem.map(cart => (
  <CartItems
  key={cart.id}
    id={cart.id}
    Name={cart.Name}
    Price={cart.Price}
    Image={cart.Image}
    Amount={cart.amount}
    onRemove={cartItemRemoveHandler.bind(null, cart.id)}
    onAdd={cartItemAddHandler.bind(null, cart)}
    />))
    
    if (getItem.length === 0 || !getItem)  {
      return (
        <div>  
           { <p>Empty cart</p>} 
          
      </div>
      )

      }
  return (
      <div>  
     {getItem.length === 0 && <p>No Cart items</p>}
        {!CartItem && <p>LoadCartItems</p>} 
        {CartItem}
   </div>

    )
};

export default Cart;