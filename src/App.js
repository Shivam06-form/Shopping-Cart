import React from 'react';
import Cart from './Cart/Cart'
import {  Redirect ,Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import SearchBar from './SearchBar/searchbar';
import CartProvider from './store/CartProvider';
import Products from './SearchBar/Products';



function App() {
  return (
    <CartProvider>
<div className="App">
<Header/>
<Switch>
<Route path='/' exact>
    <Redirect to='/home' />
  </Route>
<Route path='/home' exact>
<SearchBar/>
</Route>
<Route path='/home/:CartItems' exact >
<Cart/>
</Route>
<Route path='/CartItems/:productId'exact>
  <Products/>
</Route>
</Switch>
</div>
</CartProvider>
  );
}


export default App;
