import React from "react";
import RussiaMapForSequence from "../../components/Map/RussiaMapForSequence";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./ResultPage.module.scss";


const ResultPage: React.FC = () => {
    // const location = useLocation();
    // const { state } = location;

    // const data: IData = state.response

    // console.log(data)

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <section className={s.section}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={s.container}
            >
                <div className={s.sidebar}>
                    <motion.ul
                        className={s.list}
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.li className={s.item} variants={item}>
                            <div className={s.dataContainer}>
                                <span className={s.topic}>Исполнитель: </span>
                                <span className={s.topicData}>
                                    {/* {data.executor} */}
                                </span>
                            </div>
                            <div className={s.dataContainer}>
                                <span className={s.topic}>
                                    Текст обращения:{" "}
                                </span>
                                <span className={s.topicData}>
                                    {/* {data.text_incident} */}
                                </span>
                            </div>
                            <div className={s.dataContainer}>
                                <span className={s.topic}>Тема: </span>
                                <span className={s.topicData}>
                                    {/* {data.topic} */}
                                </span>
                            </div>
                            <div className={s.dataContainer}>
                                <span className={s.topic}>Группа: </span>
                                <span className={s.topicData}>
                                    {/* {data.topic_group} */}
                                </span>
                            </div>
                            <div className={s.dataContainer}>
                                <span className={s.topic}>Адрес: </span>
                                <span className={s.topicData}>
                                    {/* {data?.adress && data.adress.город} */}
                                </span>
                            </div>
                        </motion.li>
                    </motion.ul>
                </div>

                <div className={s.map}>
                    <RussiaMapForSequence
                    // data={data}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default ResultPage;
