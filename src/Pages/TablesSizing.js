import React from "react";
import Navbar from "../Navbar/Navbar";

const TablesSizing = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="bg-success mb-2 p-4 w-25 text-center text-white">
                    w-25
                </div>
                <div className="bg-success mb-2 p-4 w-50 text-center text-white">
                    w-50
                </div>
                <div className="bg-success mb-2 p-4 w-75 text-center text-white">
                    w-75
                </div>
                <div className="bg-success mb-2 p-4 w-100 text-center text-white">
                    w-100
                </div>

                <br />
                <hr />
                <br />

                <div className="bg-warning" style={{height: "400px"}}>
                    <div className="bg-primary d-inline-block me-1 p-4 h-25 text-center text-white">
                        h-25
                    </div>
                    <div className="bg-primary d-inline-block me-1 p-4 h-50 text-center text-white">
                        h-50
                    </div>
                    <div className="bg-primary d-inline-block me-1 p-4 h-75 text-center text-white">
                        h-75
                    </div>
                    <div className="bg-primary d-inline-block me-1 p-4 h-100 text-center text-white">
                        h-100
                    </div>
                </div>

                <br />
                <hr />
                <br />

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Görkem Aslan</td>
                            <td>gorkemaslan@gmail.com</td>
                            <td>İstanbul</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>X Aslan</td>
                            <td>gorkem73@gmail.com</td>
                            <td>Ankara</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Y Aslan</td>
                            <td>aslan73@gmail.com</td>
                            <td>Eskişehir</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Z Aslan</td>
                            <td>73@gmail.com</td>
                            <td>İzmir</td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <hr />
                <br />

                <table className="table table-success">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Görkem Aslan</td>
                            <td>gorkemaslan@gmail.com</td>
                            <td>İstanbul</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>X Aslan</td>
                            <td>gorkem73@gmail.com</td>
                            <td>Ankara</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Y Aslan</td>
                            <td>aslan73@gmail.com</td>
                            <td>Eskişehir</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Z Aslan</td>
                            <td>73@gmail.com</td>
                            <td>İzmir</td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <hr />
                <br />

                <table className="table">
                    <thead className="table-secondary">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Görkem Aslan</td>
                            <td>gorkemaslan@gmail.com</td>
                            <td>İstanbul</td>
                        </tr>
                        <tr className="table-success">
                            <td>2</td>
                            <td>X Aslan</td>
                            <td>gorkem73@gmail.com</td>
                            <td>Ankara</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Y Aslan</td>
                            <td>aslan73@gmail.com</td>
                            <td>Eskişehir</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="table-danger">Z Aslan</td>
                            <td>73@gmail.com</td>
                            <td>İzmir</td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <hr />
                <br />

                <table className="table table-success table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Görkem Aslan</td>
                            <td>gorkemaslan@gmail.com</td>
                            <td>İstanbul</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>X Aslan</td>
                            <td>gorkem73@gmail.com</td>
                            <td>Ankara</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Y Aslan</td>
                            <td>aslan73@gmail.com</td>
                            <td>Eskişehir</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Z Aslan</td>
                            <td>73@gmail.com</td>
                            <td>İzmir</td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <hr />
                <br />

                <table className="table table-success table-bordered border-primary table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Görkem Aslan</td>
                            <td>gorkemaslan@gmail.com</td>
                            <td>İstanbul</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>X Aslan</td>
                            <td>gorkem73@gmail.com</td>
                            <td>Ankara</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Y Aslan</td>
                            <td>aslan73@gmail.com</td>
                            <td>Eskişehir</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Z Aslan</td>
                            <td>73@gmail.com</td>
                            <td>İzmir</td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <hr />
                <br />

                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Görkem Aslan</td>
                            <td>gorkemaslan@gmail.com</td>
                            <td>İstanbul</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>X Aslan</td>
                            <td>gorkem73@gmail.com</td>
                            <td>Ankara</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Y Aslan</td>
                            <td>aslan73@gmail.com</td>
                            <td>Eskişehir</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Z Aslan</td>
                            <td>73@gmail.com</td>
                            <td>İzmir</td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <hr />
                <br />

                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Görkem Aslan</td>
                            <td>gorkemaslan@gmail.com</td>
                            <td>İstanbul</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>X Aslan</td>
                            <td>gorkem73@gmail.com</td>
                            <td>Ankara</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Y Aslan</td>
                            <td>aslan73@gmail.com</td>
                            <td>Eskişehir</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Z Aslan</td>
                            <td>73@gmail.com</td>
                            <td>İzmir</td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <hr />
                <br />
                <div className="table-responsive">
                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>City</th>
                                <th>City</th>
                                <th>City</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Görkem Aslan</td>
                                <td>gorkemaslan@gmail.com</td>
                                <td>İstanbul</td>
                                <td>İstanbul</td>
                                <td>İstanbul</td>
                                <td>İstanbul</td>
                                <td>İstanbul</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>X Aslan</td>
                                <td>gorkem73@gmail.com</td>
                                <td>Ankara</td>
                                <td>Ankara</td>
                                <td>Ankara</td>
                                <td>Ankara</td>
                                <td>Ankara</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Y Aslan</td>
                                <td>aslan73@gmail.com</td>
                                <td>Eskişehir</td>
                                <td>Eskişehir</td>
                                <td>Eskişehir</td>
                                <td>Eskişehir</td>
                                <td>Eskişehir</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Z Aslan</td>
                                <td>73@gmail.com</td>
                                <td>İzmir</td>
                                <td>İzmir</td>
                                <td>İzmir</td>
                                <td>İzmir</td>
                                <td>İzmir</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TablesSizing;
