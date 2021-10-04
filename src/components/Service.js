import { useEffect, useState } from "react";

const Service=()=>{
    const [services , setservices] = useState([]);
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
         .then(data=>setservices(data))
    },[])
    return (
      <div>
          <div className="text-center">
              <h1>Our Services</h1>
          </div>
          <div className="container">
                  <div className="row g-2">
                { services.map(service =>
                     <div className="col-4 border">
                       <img src={service.image} width="100%" height="300px" alt="img"/>
                       <div>Course Name : {service.course}</div>
                       <div>Fee : {service.Fee}</div>
                       <div>Supervisor : {service.Teacher}</div>
                       <div>Starting Date : {service.start}</div>
                       <button className="btn btn-primary my-2">Buy Now</button>
                   </div>
                    ) }
              </div>
              </div>
      </div>
    );
  }
  
  export default Service;
  