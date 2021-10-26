import classes from './infoshow.module.css';
  import React, { Fragment } from 'react'
  
  const Infoshow = (props) => {
      return (
        <Fragment>        
          <div className={classes.info}>
  <div>
      <img  src ={props.Image} alt="No"  />
        <center>
        </center>    
</div>
 <div> 

<h1>{props.name}</h1> 
<h4> Rating:  {props.Rating} </h4>
<summary> { props.summary} </summary>
</div>
</div>



</Fragment>

      )
  }
  
  export default Infoshow
  



 

 