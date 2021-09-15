import React from "react";
import Navbar from "../Navbar/Navbar";

const Color = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                {/*
            primary
            secondary
            success
            danger
            warning
            info
            light
            dark
            muted
            white  
            */}

                <p className="text-primary">text-primary</p>
                <p className="text-secondary">text-secondary</p>
                <p className="text-success">text-success</p>
                <p className="text-danger">text-danger</p>
                <p className="text-warning">text-warning</p>
                <p className="text-info">text-info</p>
                <p className="text-light bg-dark">text-light</p>
                <p className="text-dark">text-dark</p>
                <p className="text-muted">text-muted</p>
                <p className="text-white bg-dark">text-white</p>
                <p className="text-black-50">text-dark</p>
                <p className="text-white-50 bg-dark">text-white</p>

                <br />
                <hr />
                <br />

                <p>
                    <a href="#" className="text-danger">
                        text-danger
                    </a>
                </p>
                <p>
                    <a href="#" className="text-success">
                        text-success
                    </a>
                </p>

                <br />
                <hr />
                <br />

                <p className="bg-primary box">bg-primary</p>
                <p className="bg-secondary box">bg-secondary</p>
                <p className="bg-success box">bg-success</p>
                <p className="bg-danger box">bg-danger</p>
                <p className="bg-warning box">bg-warning</p>
                <p className="bg-info box">bg-info</p>
                <p className="bg-light box">bg-light</p>

                <br />
                <br />

                <p className="bg-primary bg-gradient box">bg-primary</p>
                <p className="bg-secondary bg-gradient box">bg-secondary</p>
                <p className="bg-success bg-gradient box">bg-success</p>
                <p className="bg-danger bg-gradient box">bg-danger</p>
                <p className="bg-warning bg-gradient box">bg-warning</p>

                <br />
                <br />

                <span className="bg-primary">span.primary</span>
                <span className="bg-secondary">span.secondary</span>
                <span className="bg-success">span.success</span>
                <span className="bg-danger">span.danger</span>
                <span className="bg-warning">span.warning</span>

                <br />
                <br />

                <span className="badge bg-primary">span.badge.primary</span>
                <span className="badge bg-secondary">span.badge.secondary</span>
                <span className="badge bg-success">span.badge.success</span>
                <span className="badge bg-danger">span.badge.danger</span>
                <span className="badge bg-warning">span.badge.warning</span>
            </div>
        </div>
    );
};

export default Color;
