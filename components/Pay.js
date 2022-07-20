import { Link } from "react-router-dom";

function Pay() {
  return (
    <>
  
    <div className="imgy"> </div>
    <h3 className="step-1">Step 1</h3>
    <form data-multi-step className="multi-step-form" >
    <div className="card" data-step>
      <h3 className="step-title">Personal Information</h3>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName"/>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName"/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"/>
      </div>
      <Link to='/step2'><button id='bout1' type="submit" data-previous>Next</button></Link>
    </div>
    
  </form>
  
  </>
  );
}

export default Pay;
