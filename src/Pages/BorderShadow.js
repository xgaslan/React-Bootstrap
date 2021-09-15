import React from "react";
import Navbar from "../Navbar/Navbar";

const BorderShadow = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="bg-light mt-2 p-4 border"></div>
                <div className="bg-light mt-2 p-4 border border-danger"></div>
                <div className="bg-light mt-2 p-4 border-top border-danger"></div>
                <div className="bg-light mt-2 p-4 border-end border-danger"></div>
                <div className="bg-light mt-2 p-4 border-bottom border-danger"></div>
                <div className="bg-light mt-2 p-4 border-start border-danger"></div>

                <br />
                <hr />
                <br />

                <div className="bg-light mt-2 p-4 border border-danger border-0"></div>
                <div className="bg-light mt-2 p-4 border border-danger border-top-0"></div>
                <div className="bg-light mt-2 p-4 border border-danger border-end-0"></div>
                <div className="bg-light mt-2 p-4 border border-danger border-bottom-0"></div>
                <div className="bg-light mt-2 p-4 border border-danger border-start-0"></div>

                <br />
                <hr />
                <br />

                <div className="bg-light mt-2 p-4 border border-primary"></div>
                <div className="bg-light mt-2 p-4 border border-secondary"></div>
                <div className="bg-light mt-2 p-4 border border-success"></div>
                <div className="bg-light mt-2 p-4 border border-danger"></div>
                <div className="bg-light mt-2 p-4 border border-warning"></div>
                <div className="bg-light mt-2 p-4 border border-info"></div>
                <div className="bg-light mt-2 p-4 border border-light"></div>
                <div className="bg-light mt-2 p-4 border border-dark"></div>
                <div className="bg-light mt-2 p-4 border border-white"></div>

                <br />
                <hr />
                <br />

                <div className="bg-light mt-2 p-4 border border-1"></div>
                <div className="bg-light mt-2 p-4 border border-2"></div>
                <div className="bg-light mt-2 p-4 border border-3"></div>
                <div className="bg-light mt-2 p-4 border border-4"></div>
                <div className="bg-light mt-2 p-4 border border-5"></div>

                <br />
                <hr />
                <br />

                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className="rounded-0 m-1"
                />
                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className="rounded-1 m-1"
                />
                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className="rounded-2 m-1"
                />
                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className="rounded-3 m-1"
                />

                <br />
                <hr />
                <br />

                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className="rounded m-1"
                />
                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className="rounded-top m-1"
                />
                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className="rounded-end m-1"
                />
                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className="rounded-bottom m-1"
                />
                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className="rounded-start m-1"
                />
                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className="rounded-circle m-1"
                />
                <img
                    src="https://via.placeholder.com/200x150"
                    alt=""
                    className="rounded-pill m-1"
                />

                <br />
                <hr />
                <br />

                <div className="bg-light mt-2 p-4 border shadow"></div>
                <div className="bg-light mt-2 p-4 border shadow-none"></div>
                <div className="bg-light mt-2 p-4 border shadow-sm"></div>
                <div className="bg-light mt-2 p-4 border shadow-lg"></div>
            </div>
        </div>
    );
};

export default BorderShadow;
