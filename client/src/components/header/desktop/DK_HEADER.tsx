import DK_LEFT from "./DK_LEFT";
import DK_RIGHT from "./DK_RIGHT";
import Navigation from "../Navigation";

const DK_HEADER = () => {
    return (
        <header className="DK-header">
            <DK_LEFT />
            <Navigation />
            <DK_RIGHT />
        </header>
    );
};

export default DK_HEADER;
