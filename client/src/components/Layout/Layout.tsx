import { Outlet } from "react-router-dom";
import s from "./Layout.module.scss";
import NavBar from "../Header/NavBar";

const Layout = () => {
    return (
        <div className={s.globalContainer}>
            <div className={s.container}>
                <header className={s.header}>
                    <NavBar></NavBar>
                </header>
                <main>
                    <Outlet />
                </main>
                <footer></footer>
            </div>
        </div>
    );
};

export default Layout;
