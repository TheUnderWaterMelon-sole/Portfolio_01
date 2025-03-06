import {Outlet} from "react-router";

import Header from "./Header";
import Footer from "./Footer";

function PageWrap(){
    return (
        <>
            <Header />
            <main className="page-container">
                {/* content passed into this component will render here */}
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default PageWrap;