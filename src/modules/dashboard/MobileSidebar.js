import React, { Fragment } from 'react';
import '../../css/sidebar.css';
import { Link } from 'react-router-dom';
import './sidebar.css';



function MobileSidebar() {
  return (
    <Fragment>


<div className='mobilesidebar ' style={{float:"left" , position:"fixed",zIndex:"3"} }>
    <h1 className='fs-5 fw-bold d-flex justify-content-center mt-1 '>MyDashboard</h1>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto  dashboard">
      <li className="nav-item">
        <Link to="Home" className="nav-link" aria-current="page">
          Home
        </Link>
      </li>
      <li>
        <Link to="/Dashboard/product" className="nav-link">
         
         Product
        </Link>
      </li>
      <li>
        <Link to="/Dashboard/customer" className="nav-link">
          
          Customer
        </Link>
      </li>
      <li>
        <Link to="/Dashboard/income" className="nav-link">
         
         Incomes
        </Link>
      </li>
      <li>
        <Link to="/Dashboard/promote" className="nav-link">
         
         Promote
        </Link>
      </li>
      <li>
        <Link to="/Dashboard/help" className="nav-link">
         
         Help
        </Link>
      </li>
     
     

     
     

    


    </ul>
    <hr/>


     
   


  </div>

   </Fragment>
  )
}

export default MobileSidebar
