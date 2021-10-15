import React, { useState } from 'react';
import { Fragment } from 'react';
import Products from './Products';
import classes from './searchBar.module.css'


const SearchBar =()=>{
 const [products, setProducts,] = useState([])
const [isProducts, setIsProducts] = useState('')
const [touched, settouched] = useState(false)


  const fetchProducts = async () => {
  const response = await fetch('./products.json', { crossOrigin: 'true' })
  const responseData = await response.json();

  const filteredProducts = responseData.filter((user) => user.name.includes(isProducts))

  let loadedProducts=[];

  if (isProducts.length === 0) {
  return <p>Bla Bla</p>
 }

    for (const key in filteredProducts) {
    loadedProducts.push({
    id: key,
    name: filteredProducts[key].name,
    price: filteredProducts[key].price,
    CurrentPrice: filteredProducts[key].currency,
    Image: filteredProducts[key].thumbnail
  })
  }
  
  settouched(true)
  setProducts(filteredProducts)
}



 const productsList = products.map((meal) => (
    <Products
    key={meal.id }
    id={meal.id}
    Name={meal.name}
    price={meal.price}
    CurrentPrice={meal.CurrentPrice}
    thumbnail={meal.thumbnail} 
      />
    ));

const SeachValue = (props) => {
    props.preventDefault()
    setIsProducts(props.target.value)

  }

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
     fetchProducts();
    }
  };


 return(
   <Fragment>
     <div className={classes.search}>
    <input 
    value={isProducts} 
    onChange={SeachValue} 
     placeholder="Search.."
     type="text"
     id="search"
     onKeyDown={onKeyDown}
     />
    <button onClick={fetchProducts}>Search</button>
    </div>
    {!touched && <h2 className={classes.product}>Search The Best.............</h2>}
    {touched && productsList.length===0 && <h2 className={classes.product}>No products Found...</h2>}
    {touched &&productsList} 
    </Fragment>
 )   
}

export default SearchBar;