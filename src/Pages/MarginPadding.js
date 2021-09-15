import React from "react";
import Navbar from "../Navbar/Navbar";

const MarginPadding = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                {/*        
            Margin ve Padding => {property}{sides}-{size}
            {property} =>
                m : margin
                p : padding

            {sides} =>
                t : top         => mt : margin-top
                b : bottom      => pb : padding-bottom
                s : start(left) => ms : margin-start
                e : end(right)  => pe : padding-end
                x : right, left => mx : margin-right & margin-left
                y : top, bottom => py : padding-top & padding bottom
            {size} =>
            $spacer  : 16px
                0    : mt-0 => margin-top : 0
                1    : mt-1 => $spacer * 0.25
                2    : mt-2 => $spacer * 0.50
                3    : mt-3 => $spacer
                4    : mt-4 => $spacer * 1.50
                5    : mt-5 => $spacer * 3.00
                auto : mx-auto => margin-left : auto; margin-right : auto;
         */}

                <div className="bg-success p-3">first</div>
                <div className="bg-danger pt-5 mt-3">first</div>

                <br />
                <hr />
                <br />

                <div
                    className="bg-primary text-center mx-auto"
                    style={{width: "150px"}}
                >
                    Ortalanmış İçerik
                </div>

                <br />
                <hr />
                <br />

                <div>
                    <span className="bg-danger p-3 me-3">text-1</span>
                    <span className="bg-warning p-3">text-2</span>
                    <span className="bg-info ps-3 ms-5">text-3</span>
                </div>
            </div>
        </div>
    );
};

export default MarginPadding;
