import classes from './Products.module.css'
import { Fragment} from 'react';
import { NavLink } from 'react-router-dom';
// import Info from '../Information/info';
import {  AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {  HiShoppingCart} from "@react-icons/all-files/hi/HiShoppingCart";
import { useMediaQuery } from 'react-responsive';
import {  useCart } from "react-use-cart"

const Products =(props)=>{
// const getItem = JSON.parse(localStorage.getItem('items'))
const { addItem,items} = useCart();
const isProducts=(items.filter((item)=>(item.Name!==props.Name)))


if ( useMediaQuery({ query: '(max-width: 540px)' })) {
	
	return(
		<Fragment>
        <div className={classes.products}>
          <h2>{props.Name}</h2>
        <img src={props.thumbnail}  alt="Avatar" style={{'width':'100%'}} />
        <div className={classes.container}>
		<p className={classes.PG}> imbd-{props.rating}</p>
          <h4>	<NavLink to={`/Shopping-Cart/Info/${props.id}`} > View More </NavLink></h4>
        </div>
      </div>
      </Fragment>
	)
}

if (!isProducts) {
	return <h2> In Cart</h2>
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
			
			
                

			{isProducts&&<button onClick={() => addItem(props)}><AiOutlineShoppingCart/></button>}
 {<button onClick={props.onRemove} ><i className={classes.fas}></i><HiShoppingCart/> </button>}

                
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