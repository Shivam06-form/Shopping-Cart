import React from 'react';
import Cart from './Cart/Cart'
import {  Redirect ,Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import SearchBar from './SearchBar/searchbar';
import CartProvider from './store/CartProvider';
import Products from './SearchBar/Products';
import Info from './Information/info';


function App() {
  return (
    <CartProvider>
<div className="App">
<Header />
<Switch>

<Route path='/' exact>
    <Redirect to='/Shopping-Cart/' />
  </Route>
<Route path='/Shopping-Cart/' exact>
<SearchBar/>
</Route>
<Route path='/Shopping-Cart/:CartItems' exact >
<Cart/>
</Route>
<Route path='/CartItems/:productId'exact>
  <Products/>
</Route>
<Route path='/Shopping-Cart/Info/:id' exact> 
  <Info/>
</Route>

<Route>
  <div>Not Found 404</div>
</Route>


</Switch>

</div>
</CartProvider>
  );
}


export default App;
