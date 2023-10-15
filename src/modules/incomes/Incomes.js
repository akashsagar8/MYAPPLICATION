import React, { Fragment } from "react";
import "./counter";
import "./count.css";

import img1 from "../../images/moneybags-30556_1280.png";


import IncomeChart from "./IncomeChart";

import IncomeApi from "./IncomeApi";
import Footer1 from "../dashboard/Footer";

function Incomes() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12" data-aos="fade-up">
            <h1
              className=" d-flex justify-content-center"
              style={{
                fontSize: "50px",
                fontStyle: "",
                fontWeight: "bold",
                color: "burlywood",
              }}
            >
              <u>Incomes</u>
            </h1>

            <IncomeChart />
            <h1 className="fw-light mt-5 fs-5 d-flex justify-content-center">
              Incomes of this year
            </h1>
          </div>
        </div>


            
        <div className="row">

            <div className="col-md-12" data-aos="fade-up">

        
                <IncomeApi/>


            </div>



        </div>








        <div className="row mt-5">
      
          <div className="col-md-6" data-aos="fade-up">
            <h1
              className=" d-flex justify-content-center"
              style={{
                fontSize: "50px",
                fontStyle: "",
                fontWeight: "bold",
                color: "burlywood",
              }}
            >
              <u>Products - selling</u>
            </h1>

            <p className="mt-3" data-aos="fade-up">
           
              lorem Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various ver
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham.
            </p>
          </div>

          <div className="col-md-6" data-aos="fade-up">
            <img
              src={img1}
              alt="not found"
              style={{     height: "539px", width: "100%" }}
            />
          </div>
        </div>

        <div className="row">

        <div className="col-md-12">
            <Footer1/>


        </div>

        </div>




      </div>




    </Fragment>
  );
}

export default Incomes;
