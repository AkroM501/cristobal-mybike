import Link from "next/link";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>

                <li>
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
