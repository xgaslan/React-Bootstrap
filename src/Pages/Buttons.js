import React from "react";
import Navbar from "../Navbar/Navbar";

const Buttons = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <button type="button" className="btn btn-primary">
                    Primary
                </button>
                <button type="button" className="btn btn-secondary">
                    Secondary
                </button>
                <button type="button" className="btn btn-success">
                    Success
                </button>
                <button type="button" className="btn btn-danger">
                    Danger
                </button>
                <button type="button" className="btn btn-warning">
                    Warning
                </button>
                <button type="button" className="btn btn-info">
                    Info
                </button>
                <button type="button" className="btn btn-light">
                    Light
                </button>
                <button type="button" className="btn btn-dark">
                    Dark
                </button>
                <button type="button" className="btn btn-link">
                    Link
                </button>

                <a href="" className="btn btn-primary">
                    a.Link
                </a>

                <br />
                <hr />
                <br />

                <button type="button" className="btn btn-outline-primary">
                    Primary
                </button>
                <button type="button" className="btn btn-outline-secondary">
                    Secondary
                </button>
                <button type="button" className="btn btn-outline-success">
                    Success
                </button>
                <button type="button" className="btn btn-outline-danger">
                    Danger
                </button>
                <button type="button" className="btn btn-outline-warning">
                    Warning
                </button>
                <button type="button" className="btn btn-outline-info">
                    Info
                </button>
                <button type="button" className="btn btn-outline-light">
                    Light
                </button>
                <button type="button" className="btn btn-outline-dark">
                    Dark
                </button>
                <button type="button" className="btn btn-outline-link">
                    Link
                </button>

                <br />
                <hr />
                <br />

                <button className="btn btn-primary btn-lg">Large Button</button>
                <button className="btn btn-primary btn-sm">Small Button</button>

                <br />
                <hr />
                <br />

                <button className="btn btn-primary disabled">
                    Primary Button
                </button>
                <button className="btn btn-danger disabled">
                    Danger Button
                </button>

                <br />
                <hr />
                <br />

                <div className="d-grid gap-2">
                    <button className="btn btn-primary ">Block Button</button>
                    <button className="btn btn-primary">Block Button</button>
                </div>

                <br />
                <hr />
                <br />

                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary ">Block Button</button>
                    <button className="btn btn-primary">Block Button</button>
                </div>

                <br />
                <hr />
                <br />

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary ">Block Button</button>
                    <button className="btn btn-primary">Block Button</button>
                </div>


                <br />
                <hr />
                <br />

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary ">Block Button</button>
                    <button className="btn btn-primary">Block Button</button>
                </div>





            </div>
        </div>
    );
};

export default Buttons;
