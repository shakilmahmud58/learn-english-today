import { useEffect, useState } from "react";

const Home = ()=> {
    const [services , setservices] = useState([]);
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
         .then(data=>setservices(data.slice(0,3)))
    },[])
    return (
      <div className="position-relative">    
          <h1 className="position-absolute mt-5 text-danger start-50">Welcome To Our Home Page</h1>
          <img src="./images/home.jfif" width="100%" height="400" className="opacity-50" alt="img"/>
          <div>
              <h2 className="text-primary mt-4 mb-4">Our Services</h2>
              <div className="container">
                  <div className="row g-2">
                { services.map(service =>
                     <div className="col-4 border">
                       <img src={service.image} width="100%" height="300px" alt="img"/>
                       <div>{service.course}</div>
                       <div>{service.fee}</div>
                       <div>{service.Teacher}</div>
                       <div>{service.start}</div>
                   </div>
                    ) }
              </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Home;
  