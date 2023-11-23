import { Outlet } from "react-router-dom";
import s from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={s.globalContainer}>
            <div className={s.container}>
                <header className={s.header}>
                    <nav>nav</nav>
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
