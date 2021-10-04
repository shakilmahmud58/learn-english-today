const SignUp = ()=> {
    return (
      <div  className="mt-5 me-4">
          <div>
              <h5 class="my-3">Create a account in our website. And get 5% discount on every package.</h5>
          </div>
        <form>
         <div className="row mb-3">
            <label for="name" className="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input type="text" className="form-control" id="name"/>
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" className="form-control" id="inputemail"/>
            </div>
          </div>
         <div className="row mb-3">
           <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
           <div class="col-sm-10">
              <input type="password" className="form-control" id="inputPassword"/>
           </div>
          </div>
          <div className="row mb-3">
           <label for="confirmpassword" className="col-sm-2 col-form-label">Password</label>
           <div class="col-sm-10">
              <input type="password" className="form-control" id="confirmpassword"/>
           </div>
          </div>
          <button className="btn btn-primary">Create Account</button>
        </form>
      </div>
    );
  }
  
  export default SignUp;
  