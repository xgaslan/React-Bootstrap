import React from "react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <h3>
                    Navbar'dan dilediğiniz konunun sayfasına gidebilirsiniz.
                </h3>
            </div>
        </div>
    );
};

export default Home;
