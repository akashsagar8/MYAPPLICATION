import React, { Fragment } from "react";
import "./help.css";
import "./main.js";
import img1 from "../../images/red-alphabet-balloons-forming-word-help.jpg";
import Footer1 from "../dashboard/Footer";
import HelpContainer from "./HelpContainer";

function Help() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12" data-aos="flip-down">
            <img
              src={img1}
              style={{ height: "400px", width: "100%" }}
              alt="not found"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <HelpContainer/>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5" data-aos="fade-up">
           <section className="d-flex justify-content-center">

            <dl>
              <dt> Q. How i can login</dt>
              <dd> Ans. you can login with your gmail id and mobile number </dd>
              <dt> Q. How i can login</dt>
              <dd> Ans. you can login with your gmail id and mobile number </dd>
              <dt> Q. How i can login</dt>
              <dd> Ans. you can login with your gmail id and mobile number </dd>
              <dt> Q. How i can login</dt>
              <dd> Ans. you can login with your gmail id and mobile number </dd>
              <dt> Q. How i can login</dt>
              <dd> Ans. you can login with your gmail id and mobile number </dd>
              <dt> Q. How i can login</dt>
              <dd> Ans. you can login with your gmail id and mobile number </dd>
              <dt> Q. How i can login</dt>
              <dd> Ans. you can login with your gmail id and mobile number </dd>
              <dt> Q. How i can login</dt>
              <dd> Ans. you can login with your gmail id and mobile number </dd>



            </dl>
            
            
           </section>
          </div>
        </div>
      </div>

      
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{marginTop:"100px"}}>
            <Footer1 />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Help;
