import { Link } from "react-router-dom";
import s from "./HomePage.module.scss";
import img from "/baymax.png";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomePage = () => {
    return (
        <section className={s.section}>
            <div className={s.hero}>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -50,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    className={s.content}
                >
                    <h2>Take your own</h2>
                    <h1>Hero</h1>
                    <div className={s.btnContainer}>
                        <Link to="upload" className={s.btn}>
                            <span>proceed</span>
                            <FaLongArrowAltRight />
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 50,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    className={s.imageContainer}
                >
                    <img src={img} alt="" />
                </motion.div>
            </div>
        </section>
    );
};

export default HomePage;
