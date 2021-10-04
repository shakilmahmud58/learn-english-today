import { Link } from "react-router-dom";

const Header =()=> {
  return (
    <div>
        <div className="container-fluid bg-primary">
            <div className="row">
               <div className="col-12 d-flex justify-content-between"> 
                  <h1 className="ps-4 py-2">Learn English Today</h1>
                  <div className="d-flex">
                      <Link className="text-white p-2 my-2 text-decoration-none" to="/home">home</Link>
                      <Link className="text-white p-2 my-2 text-decoration-none" to="/About">About</Link>
                      <Link className="text-white p-2 my-2 text-decoration-none" to="/services">Service</Link>
                      <Link className="text-white p-2 my-2 text-decoration-none" to="/signup">Sign Up</Link>
                  </div>
               </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
