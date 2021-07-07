import React, { useContext } from "react";
import ProductContext from "../context/productContext/ProductContext";

const FormWindow = () => {
    const { displayWindow, setDisplayWindow } = useContext(ProductContext);

    const handleWindow = (e: any) => {
        if (e.target.classList.contains("formWindow")) setDisplayWindow(false);
    };

    return (
        <div
            className="formWindow"
            onClick={handleWindow}
            style={{ display: displayWindow ? "flex" : "none" }}
        >
            <form className="window">
                <div className="formSection">
                    <label>Name</label>
                    <input type="text" placeholder="Name..." />
                </div>

                <div className="formSection">
                    <label>Email</label>
                    <input type="text" placeholder="Email..." />
                </div>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default FormWindow;
