import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s from "./HomePage.module.scss";

const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
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
                    <h2>Обработка обращений граждан</h2>

                    <div className={s.sliderContainer}>
                        <Slider {...sliderSettings}>
                            <div className={s.flexContainer}>
                                <h3>
                                    Разработанное нами решение классифицирует
                                    обращения пользователей и определяет группу
                                    тем, тему, исполнителя и адрес, указанный в
                                    обращении.
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    Технические особенности: Мультиязычность,
                                    многопоточность, развертываемость,
                                    автономность, user-friendly интерфейс,
                                    state-of-art technology, масштабируемость,
                                    легкая интеграция решения, решение в
                                    Docker-контейнере.
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    Отсеивание бессмысленных обращений, высокая
                                    точность и скорость работы, высочайшая
                                    стабильность доработанного алгоритма
                                    классификации, инновационный подход
                                    визуализации данных, использование ТОЛЬКО
                                    open-source технологий, удобный
                                    WEB-интерфейс, наглядность, легкая
                                    интеграция решения.
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
                            <span>Ввести запрос</span>
                            <FaLongArrowAltRight />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomePage;
