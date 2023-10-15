import React, { Fragment } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import ProductsApi from './ProductsApi';
import Footer1 from '../dashboard/Footer';

function Product() {




  return (
    <Fragment>


<div className='container ' >


                <div className='row'>
                <h1 className="d-flex  tw-light justify-content-center ">total products</h1>

                    <div className='col-12'>
                    
                    <ProductsApi/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                    
                    <ProductsApi/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                    
                    <Footer1/>
                    </div>
                </div>
            </div>



      
    </Fragment>




  )
}

export default Product
