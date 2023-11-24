import { Link } from "react-router-dom";
import s from "./HomePage.module.scss";
import img from "/baymax.png";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
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
                            <span>Загрузить файл</span>
                            <FaLongArrowAltRight />
                        </Link>
                    </div>
                    <div className={s.btnContainer}>
                        <Link to="input" className={s.btn}>
                            <span>Опробовать</span>
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

                {/* <Slider {...sliderSettings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider> */}
            </div>
        </section>
    );
};

export default HomePage;
