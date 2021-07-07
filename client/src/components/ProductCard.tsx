import React, { useContext } from "react";
import ProductContext from "../context/productContext/ProductContext";

interface IProductCard {
    id: number;
    category: string;
    name: string;
    img: string;
    price: number;
}

const ProductCard = ({ id, category, name, img, price }: IProductCard) => {
    const { setDisplayWindow } = useContext(ProductContext);

    return (
        <div className="productCard" data-id={id}>
            <img src={`${category}/${img}`} alt={name} />

            <h3>{name}</h3>
            <h3>
                {category === "arriendo"
                    ? `$${price.toLocaleString()} P/D`
                    : `$${price.toLocaleString()}`}
            </h3>

            <div className="btns">
                <button type="button" onClick={() => setDisplayWindow(true)}>
                    Buy
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
