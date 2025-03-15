import {Outlet} from "react-router";

// import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function PageWrap(){
    return (
        <>
            <div className="outer-container">
                {/* <Header /> */}
                <Navbar />
                <main className="page-container">
                    {/* content passed into this component will render here */}
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default PageWrap;