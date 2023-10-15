import React, { Fragment } from "react";
import img1 from "../../images/cust1.jpg";
import Footer1 from '../dashboard/Footer'
function Customer() {
  return (
    <Fragment>
      <div className="container">
        <div className="row ">
          <h1 className="justify-content-center d-flex mb-5 mt-3 ts-5"> Our services</h1>
          <div className="col-md-6" data-aos="fade-up">
            <section>
              <p>
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsu lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </section>
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <section>
              <img
                src={img1}
                alt="not found"
                style={{ height: "100%", width: "100%" }}
              />
            </section>
          </div>
        </div>
      </div>
	<h1 className="d-flex justify-content-center mt-5">Web-Designing</h1>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6" data-aos="fade-up">
            <section>
              <img
                src={img1}
                alt="not found"
                style={{ height: "100%", width: "100%" }}
              />
            </section>
          </div>

          <div className="col-md-6" data-aos="fade-up">
            <section>
              <p>
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsu lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
			<Footer1/>

		  </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Customer;
