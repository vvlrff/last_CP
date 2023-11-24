import { Link, NavLink } from "react-router-dom";
import s from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.logoContainer}>
                <Link to="/">
                    <img
                        style={{
                            height: 50,
                        }}
                        src="https://promo-bot.ru/wp-content/uploads/2019/12/cropped-logo-promobot.png"
                        alt=""
                    />
                </Link>
            </div>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? `${s.active}` : ""
                        }
                        to="/upload"
                    >
                        Загрузить файл
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? `${s.active}` : ""
                        }
                        to="/input"
                    >
                        Ввести запрос
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
