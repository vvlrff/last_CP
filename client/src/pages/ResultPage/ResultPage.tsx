import React from "react";
import RussiaMapForSequence from "../../components/Map/RussiaMapForSequence";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./ResultPage.module.scss";


export interface IData {
    executor: string
    text_incident: string
    topic: string
    topic_group: string
    adress: {
        город?: string
    }
    latitude: number | null
    longitude: number | null
}

const ResultPage: React.FC = () => {
    // const location = useLocation();
    // const { state } = location;

    // const data: IData = state.response

    // console.log(data)

    return (
        <section className={s.section}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={s.container}
            >

                <div className={s.sidebar}>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <span className={s.topic}>Исполнитель: </span>
                            <span className={s.topicData}>
                                {/* {data.executor} */}
                            </span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Текст обращения: </span>
                            <span className={s.topicData}>
                                {/* {data.text_incident} */}
                            </span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Тема: </span>
                            <span className={s.topicData}>
                                {/* {data.topic} */}
                            </span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Группа: </span>
                            <span className={s.topicData}>
                                {/* {data.topic_group} */}
                            </span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Адрес: </span>
                            <span className={s.topicData}>
                                {/* {data?.adress && data.adress.город} */}
                            </span>
                        </li>
                    </ul>

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
