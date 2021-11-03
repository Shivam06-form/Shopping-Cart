
import { useCart } from 'react-use-cart';
import CartItems from './CartItems';

const Cart =()=>{
  const {
    isEmpty,
    items,
  } = useCart();
  
  if (isEmpty) {
    return <p> Cart is Empty</p>
  }  
  



const CartItem = items.map(cart => (
  <CartItems
    key={cart.id}
    id={cart.id}
    Name={cart.Name}
    Price={cart.price}
    Image={cart.thumbnail}
    Amount={cart.rating.average}
    />))
    
  
  return (
      <div>  
     {items.length === 0 &&!items && <p>No Cart items</p>}
        {!CartItem && <p>LoadCartItems</p>} 
        {CartItem}
   </div>

    )
};

export default Cart;