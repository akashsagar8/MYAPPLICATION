import React, { Fragment, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "./home.css";
import "./media.css";
import Mobile1 from "./MobileSidebar";
// import icon from "../../images/icons8-menu.gif";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(
{
  duration:1000,
  offset: 400
}

);
function Landingpage() {
  const [show, func] = useState(false);

  const toggle = () => {
    if (show === true) {
      func(false);
    } else {
      func(true);
    }
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">{<Sidebar />}</div>
          <div className="col-md-10 ">
            <div className="row mynav me-4" style={{ width: "100%" }}>
              <div className="col-md-10 nav1" >
                <NavBar />
              </div>
              <div className="col-md-10 ">
                <button
                  className="btn mybtn me-3 bg-daek"
                  style={{
                    float: "right",
                    position: "relative",
                    zIndex: " 1",
                   
                    marginTop: "-55px",
                    display: "none",
                  }}
                  onClick={toggle}
                >
                  
                  {

                  show === false?<MenuOpenIcon />:<CloseIcon/>

                  }


                  
                  
                  {/* <img src={} style={{height:"20px",width:"40px"}}/> */}
                </button>
              </div>
            </div>

            {/* ----------------------------this is for mobile meny */}
            {show && <Mobile1 />}

            <section className="border main">
              <Outlet></Outlet>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Landingpage;
