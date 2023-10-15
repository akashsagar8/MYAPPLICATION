import React, { Fragment } from 'react';
import {  FcBusinessman} from "react-icons/fc";
import './sidebar.css';
import '../../js/home'




function NavBar() {


  



  return (
    <Fragment>
<nav className=" navbar  navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" style={{  zIndex:"1",  backgroundColor: "gainsboro"}}>
  <h1 className=" logo" ><span className='fc' style={{height: "40px"}}> <FcBusinessman  size={50}/>Hello Akash </span></h1>
   
    <div className="collapse navbar-collapse" style={{marginLeft:"100px"}} id="navbarSupportedContent">


    
      


    {/* <Login1/> */}

    {/* <div class="modal-footer">
      <button type="button" className="btn btn-secondary "style={{float:"right", marginLeft:"750px"}} data-bs-dismiss="modal">Sign-Up</button>
      <button type="button" className="btn btn-secondary me-5">Sign-Up</button>
  </div> */}
     
    </div>
  </div>
</nav>





        </Fragment>
  )
}

export default NavBar
