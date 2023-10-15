import {  } from '@mui/icons-material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './product.css'
import CurrencyRupeeIcon  from '@mui/icons-material/CurrencyRupee';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(
{
  duration:1000,
  offset: 100
}

);

function ProductsApi() {

        const [mydata,setdata] = useState([]);

        useEffect(()=>{


            axios.get('https://fakestoreapi.com/products')
            .then((e)=>setdata(e.data))
         

            // fetch('https://fakestoreapi.com/products')
            // .then((response)=>response)
            // .then((e)=>e.json())
            // .then((e)=>setdata(e))
            // .then(e=>console.log(e))
        
        
        
        },[]);




  return (
   <Fragment>
{/* id, title, price, description, category, image, rating */}

    
    <div className='container'>
        <div className='row'>
           

            {
                mydata.map((d)=>{
                    return(
                        <div className='col-md-3 ' data-aos="fade-up">
                         <div className="card mycard mt-3 bg-light d-flex justify-content-center" style={{width: "100%"}}>
                            <img src={d.image} style={{height:"150px",width:"150px"}} className="card-img-top ms-5 " alt="not found"/>
                            <div className="card-body">
                            <h5 className="card-title " style={{color:"green"}}><CurrencyRupeeIcon></CurrencyRupeeIcon>{d.price} </h5>
                            <h5 className="card-title">{d.title}</h5>
                            <p className="card-text">{d.category}</p>
                            <Link  className="btn btn-primary">View</Link>        
                           </div>
                        </div>
                        </div>
                  
                    )

                })



            }


            </div>
        </div>
        
    


   </Fragment>
  )
}

export default ProductsApi
