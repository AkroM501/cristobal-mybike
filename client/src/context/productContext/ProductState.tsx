import React, { useState } from "react";
import ProductContext from "./ProductContext";

const ProductState = ({ children }: any) => {
    const [displayWindow, setDisplayWindow] = useState<boolean>(false);

    return (
        <ProductContext.Provider
            value={{
                displayWindow,
                setDisplayWindow,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductState;
