import classes from './Products.module.css'
import { Fragment,  useContext,useState} from 'react';
import CartContext from '../store/cart-context';
import { NavLink } from 'react-router-dom';
// import Info from '../Information/info';
import {  AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {  HiShoppingCart} from "@react-icons/all-files/hi/HiShoppingCart";
import { useMediaQuery } from 'react-responsive';



const Products =(props)=>{
const cartCtx = useContext(CartContext)

  localStorage.setItem('itemsTotal',JSON.stringify(cartCtx.totalAmount))
  const [touched, settouched] = useState(true)
  
  const addItemToCartHandler = ((item) => {
    item.preventDefault()
    cartCtx.addItem(
      {
        id:(props.id),
        Name:props.Name,
        AirDate:props.airdate,
        EndDate:props.EndDate,
        Image:props.thumbnail,
        genres:props.genres,
		Price:props.Price,
        amount:cartCtx.addItem.length,
        totalAmount:cartCtx.totalAmount,
		url:props.url
      })
      
	
      return settouched(false)
    })

console.log(cartCtx.items)


if ( useMediaQuery({ query: '(max-width: 540px)' })) {
	return(
		<Fragment>
        <div className={classes.products}>
          <h2>{props.Name}</h2>
        <img src={props.thumbnail}  alt="Avatar" style={{'width':'100%'}} />
        <div className={classes.container}>
		<p className={classes.PG}> imbd-{props.rating}</p>
          <h4>	<NavLink to={`/Shopping-Cart/Info/${props.id}`} > View More </NavLink></h4>
       {touched && <button onClick={addItemToCartHandler} >Add To Cart</button>}
       {!touched  && <p>Already In Cart</p>}
        </div>
      </div>
      </Fragment>
	)
}


  return (
 
<Fragment>
      <div className={classes.wrapper}>
	<div className={classes.main_card}>
		<div className={classes.card_left}>
			<div className={classes.card_datails}>
				<h1>{props.Name}</h1>
				<div className={classes.card_cat}>
					<p className={classes.PG}> imbd-{props.rating}</p>
					<p className={classes.year}>{props.airdate}</p>
					<p className={classes.genre}>{ props.genres[0]}|{ props.genres[1]}|{props.genres[2]}</p>
					<p className={classes.time}>{props.runtime}m</p>
				</div>
				<p className={classes.disc}>{props.summary[0]}.</p>
				<NavLink to={`/Shopping-Cart/Info/${props.id}`} > View More </NavLink>
			<div className={classes.btn}>
       
				<button>
					<i className={classes.fas}><a href={props.url} target="_blank" rel="noreferrer">See Trailer</a></i>
				</button>
		
				<button>
				<i className={classes.fas}><a href={props.url} target="_blank" rel="noreferrer">Downlaod</a></i>
				</button>
			
				{/* <button>
					<i className="fas fa-thumbs-up"></i> 97%
				</button> */}
		
                

{touched && <button onClick={addItemToCartHandler} ><i className={classes.fas}></i><AiOutlineShoppingCart/></button>}
{!touched &&  <h1>In Cart <HiShoppingCart/> </h1>}
                
					
			</div>	
			</div>
		</div>
		<div className={classes.card_right}>
			<div className={classes.img_container}>
				<img src={props.thumbnail}  alt=""/>
				</div>
				<div className={classes.play_btn}>
					<NavLink to="https://www.imdb.com/title/tt4912910/" target="_blank">
						<i className={classes.play}></i>
					</NavLink>
				</div>
			</div>
		</div>
	</div>


      </Fragment>
    )
};

export default Products;