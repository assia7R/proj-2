import { Link } from "react-router-dom";

function Step2() {
    return (<>
        <div className="imgy"> </div>

            <h3 className="step-1">Step 2</h3>

        <form data-multi-step className="multi-step-form">
        <div className="card" data-step>
      <h3 className="step-title">Delivery Information</h3>
      
      <div className="form-group">
        <label htmlFor="Day">Day of Delivery</label>
        <input type="Date" name="day" id="day"/>
      </div>
      <div className="form-group">
        <label htmlFor="Time">Time of Delivery</label>
        <input type="Time" name="Time" id="time"/>
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address"/>
      </div>
 <Link to='/thx'><button type="submit" id='s1'>Submit</button></Link>
    </div></form></>
    );
}

export default Step2;