import React, { useState } from 'react';
import { Fragment } from 'react';
import Products from './Products';
import classes from './searchBar.module.css'


const SearchBar =()=>{
 const [products, setProducts,] = useState([])
const [isProducts, setIsProducts] = useState('')
const [touched, settouched] = useState(false)


  const fetchProducts = async () => {
  const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${isProducts}&embed=episodes`)
  const responseData = await response.json();
  console.log(responseData)
  const filteredProducts = responseData

  let loadedProducts=[];

  if (isProducts.length === 0) {
  return <p>Bla Bla</p>
 }

   
    loadedProducts.push({
    id:filteredProducts.id,
    name: filteredProducts.name,
    summary: filteredProducts.summary,
    CurrentPrice: filteredProducts.currency,
    Image: filteredProducts.image ? filteredProducts.image.original:'Image NOT FOund'
  })
  
  
  settouched(true)
  setProducts(filteredProducts)
}



 const productsList = 
    <Products
    key={products.id }
    id={products.id}
    Name={products.name}
    summary={products.summary}
    thumbnail={products.image?products.image.original :'Image NOt Found'} 
      />
    

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