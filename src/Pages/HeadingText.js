import React from "react";
import Navbar from "../Navbar/Navbar";

const HeadingText = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <h1>h1.Bootstrap Heading</h1>
                <h2>h2.Bootstrap Heading</h2>
                <h3>h3.Bootstrap Heading</h3>
                <h4>h4.Bootstrap Heading</h4>
                <h5>h5.Bootstrap Heading</h5>
                <h6>h6.Bootstrap Heading</h6>

                <br />
                <hr />
                <br />

                <p className="h1">p.h1.Bootstrap Heading</p>
                <p className="h2">p.h2.Bootstrap Heading</p>
                <p className="h3">p.h3.Bootstrap Heading</p>
                <p className="h4">p.h4.Bootstrap Heading</p>
                <p className="h5">p.h5.Bootstrap Heading</p>
                <p className="h6">p.h6.Bootstrap Heading</p>

                <br />
                <hr />
                <br />
                <h1>
                    Bootstrap heading{" "}
                    <small className="text-muted">sub heading</small>
                </h1>

                <br />
                <hr />
                <br />
                <h1 className="display-1">Display 1</h1>
                <h2 className="display-2">Display 2</h2>
                <h3 className="display-3">Display 3</h3>
                <h4 className="display-4">Display 4</h4>
                <h5 className="display-5">Display 5</h5>
                <h6 className="display-6">Display 6</h6>

                <br />
                <hr />
                <br />

                <p className="fs-1">font size-1</p>
                <p className="fs-2">font size-2</p>
                <p className="fs-3">font size-3</p>
                <p className="fs-4">font size-4</p>
                <p className="fs-5">font size-5</p>
                <p className="fs-6">font size-6</p>

                <br />
                <hr />
                <br />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil quia ad omnis illum laborum nobis, repellendus vitae
                    ullam, minima perspiciatis possimus reiciendis qui! Sequi
                    tempore odio veniam temporibus cupiditate sit.
                </p>

                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil quia ad omnis illum laborum nobis, repellendus vitae
                    ullam, minima perspiciatis possimus reiciendis qui! Sequi
                    tempore odio veniam temporibus cupiditate sit.
                </p>

                <br />
                <hr />
                <br />

                <p className="text-lowercase">LOWERCASE</p>
                <p className="text-uppercase">uppercase</p>
                <p className="text-capitalize">capitalized text</p>

                <br />
                <hr />
                <br />

                <p className="fw-bold">Bold text</p>
                <p className="fw-normal">Normal text</p>
                <p className="fw-light">Light text</p>
                <p className="fs-italic">Italic text</p>
                <p className="fs-normal">Normal text</p>

                <br />
                <hr />
                <br />

                <p className="lh-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Neque ea doloribus perspiciatis, labore consectetur nihil
                    beatae in aperiam quibusdam eveniet voluptatem, suscipit
                    magnam quas qui a nemo, quasi cumque inventore!
                </p>
                <p className="lh-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Neque ea doloribus perspiciatis, labore consectetur nihil
                    beatae in aperiam quibusdam eveniet voluptatem, suscipit
                    magnam quas qui a nemo, quasi cumque inventore!
                </p>
                <p className="lh-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Neque ea doloribus perspiciatis, labore consectetur nihil
                    beatae in aperiam quibusdam eveniet voluptatem, suscipit
                    magnam quas qui a nemo, quasi cumque inventore!
                </p>

                <br />
                <hr />
                <br />

                <p>
                    <mark>Lorem ipsum</mark> dolor<del> sit amet </del>
                    consectetur adipisicing elit. Eaque, nisi at. Dolorem, earum
                    harum obcaecati reiciendis accusantium delectus enim
                    officiis?
                </p>

                <p>
                    <mark>Lorem ipsum</mark> dolor<del> sit amet </del>
                    consectetur adipisicing elit. Eaque, nisi at.
                    <span className="mark">
                        {" "}
                        Dolorem, earum harum obcaecati reiciendis{" "}
                    </span>
                    accusantium delectus enim officiis?
                </p>

                <br />
                <hr />
                <br />

                <p>
                    Lorem ipsum dolor sit amet.{" "}
                    <a href="#" className="text-reset">
                        Link
                    </a>
                </p>
                <p>
                    Lorem ipsum dolor sit amet.
                    <a href="#" className="text-decoration-none">
                        Link
                    </a>
                </p>

                <p className="text-decoration-underline">
                    Lorem ipsum dolor sit amet.
                </p>
                <p className="text-decoration-line-through">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
    );
};

export default HeadingText;
