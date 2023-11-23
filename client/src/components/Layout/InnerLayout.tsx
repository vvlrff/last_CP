import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const InnerLayout = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
};

export default InnerLayout;
