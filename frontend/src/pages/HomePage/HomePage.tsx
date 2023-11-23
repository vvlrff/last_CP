import { Link } from "react-router-dom";
import s from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <section className={s.section}>
            <div className={s.hero}>
                <h1>lorem ipsum</h1>
                <Link to="#" className={s.btn}>
                    proceed
                </Link>
            </div>
        </section>
    );
};

export default HomePage;
