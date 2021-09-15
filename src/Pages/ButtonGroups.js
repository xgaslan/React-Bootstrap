import React from "react";
import Navbar from "../Navbar/Navbar";

const ButtonGroups = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="btn-group">
                    <button className="btn btn-primary active">Button</button>
                    <button className="btn btn-primary">Button</button>
                    <button className="btn btn-primary">Button</button>
                </div>

                <br />
                <hr />
                <br />

                <div className="btn-group">
                    <button className="btn btn-outline-primary active">
                        Button
                    </button>
                    <button className="btn btn-outline-primary">Button</button>
                    <button className="btn btn-outline-primary">Button</button>
                </div>

                <br />
                <hr />
                <br />

                <div className="btn-group-vertical">
                    <button className="btn btn-outline-primary active">
                        Button
                    </button>
                    <button className="btn btn-outline-primary">Button</button>
                    <button className="btn btn-outline-primary">Button</button>
                </div>

                <br />
                <hr />
                <br />

                <div className="btn-group btn-group-lg">
                    <button className="btn btn-outline-primary active">
                        Button
                    </button>
                    <button className="btn btn-outline-primary">Button</button>
                    <button className="btn btn-outline-primary">Button</button>
                </div>

                <br />
                <hr />
                <br />

                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary active">
                        Button
                    </button>
                    <button className="btn btn-outline-danger">Button</button>
                    <button className="btn btn-outline-warning">Button</button>
                </div>

                <br />
                <hr />
                <br />

                <div className="btn-group">
                    <input
                        type="checkbox"
                        id="btnCheck1"
                        className="btn-check"
                    />
                    <label
                        htmlFor="btnCheck1"
                        className="btn btn-outline-primary"
                    >
                        Checkbox 1
                    </label>
                    <input
                        type="checkbox"
                        id="btnCheck2"
                        className="btn-check"
                    />
                    <label
                        htmlFor="btnCheck2"
                        className="btn btn-outline-primary"
                    >
                        Checkbox 2
                    </label>
                    <input
                        type="checkbox"
                        id="btnCheck3"
                        className="btn-check"
                    />
                    <label
                        htmlFor="btnCheck3"
                        className="btn btn-outline-primary"
                    >
                        Checkbox 3
                    </label>
                </div>

                <br />
                <hr />
                <br />

                <div className="btn-group">
                    <input
                        type="radio"
                        name="btnRadio"
                        id="btnRadio1"
                        className="btn-check"
                        checked
                    />
                    <label
                        htmlFor="btnRadio1"
                        className="btn btn-outline-primary"
                    >
                        Radio 1
                    </label>
                    <input
                        type="radio"
                        name="btnRadio"
                        id="btnRadio2"
                        className="btn-check"
                    />
                    <label
                        htmlFor="btnRadio2"
                        className="btn btn-outline-primary"
                    >
                        Radio 2
                    </label>
                    <input
                        type="radio"
                        name="btnRadio"
                        id="btnRadio3"
                        className="btn-check"
                    />
                    <label
                        htmlFor="btnRadio3"
                        className="btn btn-outline-primary"
                    >
                        Radio 3
                    </label>
                </div>

                <br />
                <hr />
                <br />

                <div className="btn-toolbar">
                    <div className="btn-group btn-group-sm me-2">
                        <button className="btn btn-primary">1</button>
                        <button className="btn btn-primary">2</button>
                        <button className="btn btn-primary">3</button>
                    </div>

                    <div className="btn-group btn-group-sm me-2">
                        <button className="btn btn-primary">4</button>
                        <button className="btn btn-primary">5</button>
                        <button className="btn btn-primary">6</button>
                    </div>

                    <div className="btn-group btn-group-sm">
                        <button className="btn btn-primary">7</button>
                        <button className="btn btn-primary">8</button>
                        <button className="btn btn-primary">9</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonGroups;
