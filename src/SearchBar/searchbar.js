import React, { useState } from 'react';
import { Fragment } from 'react';
import Products from './Products';
import classes from './searchBar.module.css'
import images from '../Imges/CS-GO-image.jpg'
import Pagination  from '../Post/Pagination' 
// import { useCart } from 'react-use-cart';



const SearchBar =()=>{
  const [isProducts, setIsProducts] = useState('')
  const [products, setProducts,] = useState([])
  const [touched, settouched] = useState(false)
 const [currentPage,setCurrentPage] = useState(1)
const resultPerPage = 20


const fetchProducts = async () => {
  const response = await fetch(` https://api.tvmaze.com/shows`)
  const responseData = await response.json();
  const filteredProducts = responseData.filter((user) => user.name.toLowerCase().trim().includes(isProducts.toLowerCase().trim()))

  
  if (isProducts.length === 0 && !isProducts) {
    return <p>Bla Bla</p>
  }
  
  settouched(true)
  setProducts(filteredProducts)
}


const indexOfFirstPost =( currentPage -1 ) * resultPerPage;
const indexOfLastPost = currentPage * resultPerPage;
const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
const nextPage = (number) => setCurrentPage(currentPage + number)





const productsList =  currentPosts.map((meal) => {
//   let updatedItems=[]; 
//   const addItemToCartHandler = () => {
//     const getItem  = JSON.parse(localStorage.getItem('items'))
//   updatedItems.push(meal);
//   localStorage.setItem('items',JSON.stringify(updatedItems));
//   if(!getItem) {return false}
//   if(updatedItems.filter((item)=> item.name === meal.name)){
//     let newItems = [];
//     localStorage.setItem('items',JSON.stringify(newItems.concat(getItem,meal)));
//   }

// }

// const removeItemToCartHandler =()=> {
//   const getItem  = JSON.parse(localStorage.getItem('items'))
//   const deleteItem = getItem.filter((item)=> item.name !== meal.name);
//   localStorage.setItem('items',JSON.stringify(deleteItem));
// }



    return(
    <Products
    id={meal.id}
    key={meal.id }
    Name={meal.name}
    airdate={meal.premiered}
    EndDate={meal.ended}
    genres={meal.genres}
    thumbnail={meal.image?meal.image.original :images}
    summary={meal.summary}
    price={meal.rating.average}
    runtime={meal.runtime}
    url={meal.url}
    rating={meal.rating.average}
    Cart={false}
    Cart2={true}
      />
      )
 })
 const SeachValue = (props) => {
   props.preventDefault()
   setIsProducts(props.target.value)
   
  }
  
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      fetchProducts();
      setCurrentPage(1)
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
    <button  onClick={fetchProducts} >Search</button>
    </div>
    {!touched && <h2 className={classes.product}>Search The Best.............</h2>}
      {products && <Pagination  products={products} resultPerPage={resultPerPage} currentPage={currentPage}
      nextPage={nextPage}
      />}
    {touched && productsList.length===0 && <h2 className={classes.product}>No products Found...</h2>}
    {touched && productsList}
      {products && <Pagination  products={products} resultPerPage={resultPerPage} currentPage={currentPage}
      nextPage={nextPage}
      />}
    </Fragment>
 )   
}

export default SearchBar;