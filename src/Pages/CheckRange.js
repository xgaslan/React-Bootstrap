import React from "react";
import Navbar from "../Navbar/Navbar";

const CheckRange = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="form-check">
                <input type="checkbox" name="" id="ch1" className="form-check-input"/>
                <label htmlFor="ch1" className="form-check-label">Default Checkbox</label>

                <br />
                <hr />
                <br />

                <input type="checkbox" name="" id="ch2" className="form-check-input" defaultChecked/>
                <label htmlFor="ch2" className="form-check-label">Default Checkbox</label>

                <br />
                <hr />
                <br />

                <input type="checkbox" name="" id="ch3" className="form-check-input" defaultChecked disabled/>
                <label htmlFor="ch3" className="form-check-label">Default Checkbox</label>
                </div>

                <br />
                <hr />
                <br />





                
            </div>
        </div>
    );
};

export default CheckRange;
