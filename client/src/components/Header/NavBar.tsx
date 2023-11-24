import { Link } from "react-router-dom";
import s from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <img
                    style={{
                        height: 50,
                    }}
                    src="https://promo-bot.ru/wp-content/uploads/2019/12/cropped-logo-promobot.png"
                    alt=""
                />
            </Link>
        </nav>
    );
};

export default NavBar;
