import React, { Fragment } from 'react';
import './home.css';
import { FcApproval,FcAssistant, FcBusinessman} from "react-icons/fc";
import TableData from './TableData';
import Sellchart from './Sellchart';
import PiChart from './PiChart';
import PureCounter from '@srexi/purecounterjs';
import ReceiptIcon from '@mui/icons-material/Receipt';
import IconButton from '@mui/material/IconButton';
import CurrencyRupeeIcon  from '@mui/icons-material/CurrencyRupee';
import BalanceIcon from '@mui/icons-material/Balance';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import img1 from '../../images/img.jpg';
import img2 from '../../images/home1.jpg'
import Footer1 from './Footer';
import './media.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(
{
  duration:1000,
  offset: 100
}

);

new PureCounter({
  selector: '.purecounter',
  start: 0, 
  end: 1000,
  duration: 2,
  delay: 10,
  // once: true,

  repeat: true,
  decimals: 0,
  legacy: true,
  filesizing: false,
  currency: false,
  separator: true,
});


function Home() {
  return (
    <Fragment>

      <div className='container-fluid'>

            <div className='row block1 justify-content-center ' data-aos="fade-up">

                <div className='col-md-2 offset-md-.5 hbr '>
                  <section className=''> 

                  <span className='circle' style={{fontSize:"70px",
                 color:"red", transform: "scale(.5, 1) ",
                 height:"30px",width:"50px",borderRadius:"90px", 
                 backgroundColor:"rgb(119 216 108 / 26%)", marginTop:"30px"}} >
                    <IconButton size="large">
                      <CurrencyRupeeIcon fontSize="large" style={{color:"light-green"}}/>
                      
                      </IconButton>
                      
                      	</span>
 


                    <span data-purecounter-start="0" 
                      data-purecounter-end="99"
                    style={{marginTop:"1px"}}
                      data-purecounter-duration="1"
                      class="purecounter count"> 99<span>k</span>
                  </span>
                    <p className='fw-light fs-5'>Earning this month</p>
                </section>
                  
                </div>



                <div className='col-md-2  offset-md-1 hbr'>

                <section> 
                 <span className='circle' style={{fontSize:"70px",
                 color:"red", transform: "scale(.5, 1) ",
                 height:"30px",width:"40px",borderRadius:"90px", 
                 backgroundColor:"#e0b9ff30", marginTop:"30px"}} >
                    <IconButton size="large">
                      <ReceiptIcon fontSize="large" style={{color:"red"}}/>
                      
                      </IconButton>	</span>
                    <span data-purecounter-start="0" 
                      data-purecounter-end="50"
                    style={{marginTop:"10px"}}
                      data-purecounter-duration="1"
                      class="purecounter count">  50<span>k</span>
                  </span>
                    <p className='fw-light fs-5'>Order this month</p>
                </section>
                  
                </div>



                <div className='col-md-2 offset-md-1 hbr'>
                <section> 

                
                <span className='circle' style={{fontSize:"70px",
                 color:"red", transform: "scale(.5, 1) ",
                 height:"30px",width:"50px",borderRadius:"90px", 
                 backgroundColor:"rgb(99 229 218 / 19%)", marginTop:"30px"}} >
                    <IconButton size="large">
                      <BalanceIcon fontSize="large" style={{color:"light-green"}}/>
                      
                      </IconButton>
                      	</span>
                    <span data-purecounter-start="0" 
                      data-purecounter-end="30"
                    style={{marginTop:"1px" ,color:"red"}}
                      data-purecounter-duration="1"
                      class="purecounter count"> 30<span>k</span>
                  </span>
                    <p className='fw-light fs-5'>Balance this month</p>
                </section>
                  
                </div>




                <div className='col-md-2 offset-md-1 pe-4 hbr '>

                <section> 
           
                <span className='circle' style={{fontSize:"70px",
                 color:"red", transform: "scale(.5, 1) ",
                 height:"30px",width:"50px",borderRadius:"90px", 
                 backgroundColor:"rgb(119 216 108 / 26%)", marginTop:"30px"}} >
                    <IconButton size="large">
                      <GolfCourseIcon fontSize="large" style={{color:"light-green"}}/>
                      
                      </IconButton>
                      	</span>

    


                 <span style={{fontSize:"50px", transform: "scale(.5, 1)"}} > </span>
                    <span data-purecounter-start="0" 
                      data-purecounter-end="90"
                    style={{marginTop:"1px", color:"green"}}
                      data-purecounter-duration="1"
                      class="purecounter count"> 90<span>k</span>
                  </span>
                    <p className='fw-light fs-5'>Total sell</p>
                </section>
                  
                </div>
  


  


            </div>

{/* ---------------------------------------------htis is the second box-------------------------------------- */}


        <div className='row box2 mt-5 justify-content-center'>

          <div className='col-md-7  offset-md-.5 bg-light '  data-aos="fade-up">
          <h6 className=' fs-5 fw-light'> Overview Monthly earning</h6>

           <Sellchart/>


          </div>
          <div className='col-md-3 offset-md-1 bg-light  ' data-aos="fade-up">
    <h6 className=' fs-5 fw-light'>customer that but products</h6>
            <PiChart/>

          </div>

        </div>







     </div>

{/* --------------------------------------this is the table of the data----------------------------------- */}

    <div className='row box3 mt-5 ' >

      <div className='col-md-12 border ' style={{marginTop:"50px"}} data-aos="fade-up">

      <TableData/>


      </div>


    </div>


{/* -----------------------this is the banner for the product--------------------------- */}

    <div className='container-fluid'>

      <div className='row'>


       
          <div className='col-md-5 mt-5 offset-md-.5'>

        <img src={img1} alt='image not found' style={{height:"100%",width:"100%"}}   data-aos="fade-up" />

        </div>
          <div className='col-md-5 offset-md-1 mt-5' data-aos="fade-up">

            <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>



        </div>
      
    </div>
    <div className='container-fluid'>

      <div className='row'>


       
          <div className='col-md-5 offset-md-1 mt-5' data-aos="fade-up">

            <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>

          <div className='col-md-5 mt-5 offset-md-.5'>

        <img src={img2} alt='image not found' style={{height:"100%",width:"100%"}} data-aos="fade-up"/>

        </div>


        </div>
      
    </div>


    {/* ------------------------this is the footer-------------------------------- */}


<div className='container'>
  
  <div className='row'>
    <div className='col-md-12'>
      <Footer1/>

    </div>

  </div>
</div>


    </Fragment>
  )
}

export default Home
