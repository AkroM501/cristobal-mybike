import React, { useState, useEffect, useContext } from "react";
import Axios from "../config/Axios";
import productsJson from "../products.json";
import ProductCard from "../components/ProductCard";
import FormWindow from "../components/FormWindow";

const Products = () => {
    const [products, setProducts] = useState({
        arriendo: [],
        piezas: [],
        venta: [],
    });

    useEffect(() => {
        const arriendoArray = [];
        const piezasArray = [];
        const ventaArray = [];

        for (let i = 0; i < productsJson.length; i++) {
            if (productsJson[i].category === "arriendo") {
                arriendoArray.push(productsJson[i]);
            } else if (productsJson[i].category === "piezas") {
                piezasArray.push(productsJson[i]);
            } else if (productsJson[i].category === "venta") {
                ventaArray.push(productsJson[i]);
            }
        }

        setProducts((prev: any) => ({
            ...prev,
            arriendo: arriendoArray,
            piezas: piezasArray,
            venta: ventaArray,
        }));
    }, []);

    return (
        <>
            <FormWindow />
            <div className="iw_products">
                <h3>Arriendo</h3>

                <div className="grid">
                    {products.arriendo.map((product: any) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            img={product.img}
                            category={product.category}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>

                <h3>Piezas</h3>
                <div className="grid">
                    {products.piezas.map((product: any) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            img={product.img}
                            category={product.category}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>

                <h3>Ventas</h3>
                <div className="grid">
                    {products.venta.map((product: any) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            img={product.img}
                            category={product.category}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async ({ req, res }) => {
    const getUserToken = req.cookies.token;

    try {
        if (!getUserToken || getUserToken === "0") throw "no user token";

        const { data } = await Axios.get("/auth", {
            headers: { Authorization: `Bearer ${getUserToken}` },
        });

        if (data.auth) {
            return {
                props: {},
            };
        }
    } catch (e) {
        console.log(e);
        console.log("products.tsx error getServerSideProps");
        res.setHeader("Location", "/");
        res.statusCode = 302;

        return {
            props: {},
        };
    }
};

export default Products;
