// @flow strict

import * as React from 'react';
import data from '../SWAMI/PoojaTypes';

function Home() {
    return (
 
<div className='row     p-3  m-2 text-center  '>

{
  data.map(val =>
      
    <div key={val.id}  
     className='  hover_box container-fluid   border  row  p-1 mt-5  text-center' >
    <div className=' row container-fluid'>
        <div className='col-sm-10 col-md-5 col-lg-5 '>
            <img src={val.img} width="250px" height="250px"/>
        </div>
        <div className='col-sm-10 col-md-5 col-lg-5 '>
        <h1
        >
        {
          val.Custname
        }

      </h1>
      <h2>
        
         ₹{
          val.Price
        } 
      </h2>
      <h2>Pooja Name:-{
          val.PoojaName 
        } </h2>
       
       
         <div className="btn-group" role="group" aria-label="Basic example">
         <button className="hover_box btn btn-outline-primary   "> <h3>Book Priest</h3></button>
        
         </div>
           
        </div>
        </div>
        </div>
    
    )
}
</div>)
}



export default Home;