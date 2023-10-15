import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

function IncomeApi() {
  const [mydata, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://anapioficeandfire.com/api/houses")
      .then((e)=>setdata(e.data))
    //   .then((e1) => setdata(e1));
  }, []);

  return (
    <Fragment>
      <div className="container ">
        <div className="row "style={{backgroundColor:"#f6fffd91"}}>
          <div className="col-12">
        
        <h1 className=" fw-light d-flex justify-content-center mt-5" style={{fontSize:"40px"}}>----This is a fake data-Api you can call your api----</h1>
          
            <h3 className="mt-5 ">Total:{mydata.length}</h3>
            <table className="table table-bordered " >
              <thead className="" >
                <tr>
                  <th scope="col">name</th>
                  <th scope="col">region</th>
                  <th scope="col">costOdArms</th>
                  <th scope="col">words</th>
                
                </tr>
              </thead>
              <tbody>
                {
               
               mydata.map((d)=>{
                return(
                    <tr>
                    <th >{d.name}</th>
                    <td>{d.region}</td>
                    <td>{d.costOfArms === ''?'3424rs':'8783rs'}</td>
                    <td>{d.words}</td>
                    <td></td>
                  </tr>
              
                )

            }) 
               }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default IncomeApi;
