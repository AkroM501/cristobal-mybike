import { AppProps } from "next/app";

// Components
import Header from "../components/Header";

// Context
import UserState from "../context/userContext/UserState";
import ProductState from "../context/productContext/ProductState";

import "../sass/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <UserState>
            <ProductState>
                <Header />
                <div className="container">
                    <Component {...pageProps} />
                </div>
            </ProductState>
        </UserState>
    );
};

export default App;
