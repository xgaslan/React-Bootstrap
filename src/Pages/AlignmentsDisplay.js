import React from "react";
import Navbar from "../Navbar/Navbar";

const AlignmentsDisplay = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <p className="text-start">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque minus repellat rerum odit! Voluptatem, modi hic porro
                    dolor minus deleniti tempore, labore iure quae aperiam
                    voluptate fuga, nihil ratione vero.
                </p>
                <p className="text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque minus repellat rerum odit! Voluptatem, modi hic porro
                    dolor minus deleniti tempore, labore iure quae aperiam
                    voluptate fuga, nihil ratione vero.
                </p>
                <p className="text-end">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque minus repellat rerum odit! Voluptatem, modi hic porro
                    dolor minus deleniti tempore, labore iure quae aperiam
                    voluptate fuga, nihil ratione vero.
                </p>

                <br />
                <hr />
                <br />

                <blockquote className="blockquote">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem impedit aspernatur, ipsa adipisci assumenda itaque
                        atque obcaecati harum cupiditate perferendis quidem
                        praesentium minima totam ea, odio eum delectus
                        doloremque quo.
                    </p>
                    <footer className="blockquote-footer">Lorem, ipsum.</footer>
                </blockquote>
                <blockquote className="blockquote text-center">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem impedit aspernatur, ipsa adipisci assumenda itaque
                        atque obcaecati harum cupiditate perferendis quidem
                        praesentium minima totam ea, odio eum delectus
                        doloremque quo.
                    </p>
                    <footer className="blockquote-footer">Lorem, ipsum.</footer>
                </blockquote>
                <blockquote className="blockquote text-end">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem impedit aspernatur, ipsa adipisci assumenda itaque
                        atque obcaecati harum cupiditate perferendis quidem
                        praesentium minima totam ea, odio eum delectus
                        doloremque quo.
                    </p>
                    <footer className="blockquote-footer">Lorem, ipsum.</footer>
                </blockquote>

                <br />
                <hr />
                <br />

                <div className="clearfix">
                    <div
                        className="bg-primary float-start"
                        style={{width: "100px", height: "100px"}}
                    ></div>
                    <div
                        className="bg-success float-end"
                        style={{width: "100px", height: "100px"}}
                    ></div>
                </div>
                <div className="bg-danger" style={{height: "100px"}}></div>

                <br />
                <hr />
                <br />

                <div className="d-inline bg-primary p-3 m-1 text-white">
                    div.d-inline
                </div>
                <div className="d-inline bg-primary p-3 m-1 text-white">
                    div.d-inline
                </div>

                <br />
                <hr />
                <br />

                <span className="d-block bg-primary p-3 m-1 text-white">
                    span.d-inline
                </span>
                <span className="d-block bg-primary p-3 m-1 text-white">
                    span.d-inline
                </span>

                <br />
                <hr />
                <br />

                <div className="bg-primary d-inline-block m-1">
                    <h3>Product Name</h3>Description
                </div>
                <div className="bg-primary d-inline-block">
                    <h3>Product Name</h3>Description
                </div>

                <br />
                <hr />
                <br />

                <h3>None div</h3>
                <div className="d-none bg-warning">d-none</div>

                <br />
                <hr />
                <br />

                <h3>Invisible div</h3>
                <div className="invisible bg-warning">invisible</div>

                <br />
                <hr />
                <br />

                <div
                    className="badge bg-primary text-wrap"
                    style={{width: "6rem"}}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores, nesciunt.
                </div>

                <div
                    className="badge bg-primary text-nowrap"
                    style={{width: "6rem"}}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores, nesciunt.
                </div>

                <p className="text-break">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elittttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
                    Magnam vero perferendis ex unde facere? Labore nihil
                    asperiores maxime nemo illo. Voluptates ratione voluptatem
                    architecto molestias dolore placeat rerum? Nam, magni!
                </p>
            </div>
        </div>
    );
};

export default AlignmentsDisplay;
