// @flow strict

import * as React from 'react';
import data from './todaypooja';

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
      <h4>
        
         ₹{
          val.Price
        } 
      </h4>
      <p>Pooja Name:-{
          val.PoojaName 
        } </p>
        <p>Location:-{
          val.Location 
        } </p>
      <p>Time:-{
          val.Time 
        } </p>
        <p>Date:-{

        val.Date
        }  </p>
         <div class="btn-group" role="group" aria-label="Basic example">
         <button type="button" class="btn btn-secondary"> <h3>Done</h3></button>
         <button type="button" class="btn btn-secondary"><h3>Not Done</h3></button>
         <button type="button" class="btn btn-secondary "><h3>Not Attended</h3> </button>
         </div>
           
        </div>
        </div>
        </div>
    
    )
}
</div>)
}



export default Home;