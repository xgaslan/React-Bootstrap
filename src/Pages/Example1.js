import React from "react";
import Navbar from "../Navbar/Navbar";

const Example1 = () => {
    return (
        <div>
            <Navbar />
            <div className="py-4 mx-auto mt-3" style={{width: "1140px"}}>
                <header className="pb-3 mb-4 border-bottom">
                    <a href="#" className="text-dark text-decoration-none">
                    <i class="bi bi-facebook fs-3 me-2"></i>
                        <span className="fs-4">Facebook</span>
                    </a>
                </header>

                <div className="p-5 mb-4 bg-light rounded-3">
                    <h1 className="display-5 fw-bold mb-3">Site Header</h1>
                    <p className = "fs-4 mb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repellendus ipsam veritatis ea, non dolores sequi
                        fuga, obcaecati quod ullam est nam a consequuntur. Eius
                        cumque facilis, adipisci neque officiis voluptates.
                    </p>
                    <button className = "btn btn-primary btn-lg">Example Button</button>
                </div>
            </div>
        </div>
    );
};

export default Example1;
