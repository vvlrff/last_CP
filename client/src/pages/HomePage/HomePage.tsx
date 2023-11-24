import { Link } from "react-router-dom";
import s from "./HomePage.module.scss";
import img from "/baymax.png";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
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
                    className={s.imageContainer}
                >
                    <img
                        src={
                            "https://promo-bot.ru/wp-content/uploads/2022/05/img-configuration-3-1.png"
                        }
                        alt=""
                    />
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
                    className={s.content}
                >
                    <h2>Take your own</h2>
                    <h1>Hero</h1>
                    <div className={s.sliderContainer}>
                        <Slider {...sliderSettings}>
                            <div>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Doloribus consequuntur
                                    quibusdam recusandae nobis inventore iusto
                                    exercitationem quod fugiat! Similique, rem
                                    rerum. Sit vitae reiciendis nulla, quae vero
                                    eum nostrum adipisci.
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Doloribus consequuntur
                                    quibusdam recusandae nobis inventore iusto
                                    exercitationem quod fugiat! Similique, rem
                                    rerum. Sit vitae reiciendis nulla, quae vero
                                    eum nostrum adipisci.
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Doloribus consequuntur
                                    quibusdam recusandae nobis inventore iusto
                                    exercitationem quod fugiat! Similique, rem
                                    rerum. Sit vitae reiciendis nulla, quae vero
                                    eum nostrum adipisci.
                                </h3>
                            </div>
                        </Slider>
                    </div>
                    <div className={s.btnContainer}>
                        <Link to="upload" className={s.btn}>
                            <span>Загрузить файл</span>
                            <FaLongArrowAltRight />
                        </Link>
                        <Link to="input" className={s.btn}>
                            <span>Опробовать</span>
                            <FaLongArrowAltRight />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomePage;
