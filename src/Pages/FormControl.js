import React from "react";
import Navbar from "../Navbar/Navbar";

const FormControls = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="form-control"
                        placeholder="Enter Name"
                    />
                </div>
                <hr />
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        className="form-control"
                    />
                </div>
                <hr />
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="form-control form-control-sm"
                        placeholder="Enter Name"
                    />
                </div>
                <hr />
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="form-control form-control-lg"
                        placeholder="Enter Name"
                    />
                </div>
                <hr />
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="form-control"
                        placeholder="Enter Name"
                        readOnly
                    />
                </div>
                <hr />
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="form-control"
                        placeholder="Enter Name"
                        disabled
                    />
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="sehirler" className="form-label">
                        Şehirler
                    </label>
                    <select
                        name="sehirler"
                        id="sehirler"
                        className="form-select"
                    >
                        <option value="34">İstanbul</option>
                        <option value="26">Eskişehir</option>
                        <option value="59">Tekirdağ</option>
                        <option value="06">Ankara</option>
                        <option value="35">İzmir</option>
                    </select>
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="sehirler" className="form-label">
                        Şehirler
                    </label>
                    <input
                        type="text"
                        name="sehirler"
                        id="sehirler"
                        list="sehirList"
                        className="form-control"
                        placeholder="Type..."
                    />
                    <datalist id="sehirList">
                        <option value="İstanbul"></option>
                        <option value="Eskişehir"></option>
                        <option value="Tekirdağ"></option>
                        <option value="Ankara"></option>
                        <option value="İzmir"></option>
                    </datalist>
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="sehirler" className="form-label">
                        Şehirler
                    </label>
                    <select
                        name="sehirler"
                        id="sehirler"
                        className="form-select form-select-lg"
                    >
                        <option value="34">İstanbul</option>
                        <option value="26">Eskişehir</option>
                        <option value="59">Tekirdağ</option>
                        <option value="06">Ankara</option>
                        <option value="35">İzmir</option>
                    </select>
                </div>

                <hr />

                <div className="mb-3">
                    <label
                        htmlFor="sehirler"
                        className="form-label form-select-sm"
                    >
                        Şehirler
                    </label>
                    <select
                        name="sehirler"
                        id="sehirler"
                        className="form-select"
                    >
                        <option value="34">İstanbul</option>
                        <option value="26">Eskişehir</option>
                        <option value="59">Tekirdağ</option>
                        <option value="06">Ankara</option>
                        <option value="35">İzmir</option>
                    </select>
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="imageFile" className="form-label"></label>
                    <input
                        type="file"
                        name="imageFile"
                        id="imageFile"
                        className="form-control"
                    />
                </div>

                <hr />

                <div className="mb-3">
                    <label htmlFor="imageFile" className="form-label"></label>
                    <input
                        type="file"
                        name="imageFile"
                        id="imageFile"
                        className="form-control"
                        multiple
                    />
                </div>
            </div>
        </div>
    );
};

export default FormControls;
