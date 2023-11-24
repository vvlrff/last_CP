import React from "react";
import RussiaMap from "../../components/Map/RussiaMap";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./MapPage.module.scss";

export interface IData {
    executor: string;
    text_incident: string;
    topic: string;
    topic_group: string;
    adress: {
        город?: string;
    };
    latitude: number | null;
    longitude: number | null;
    sentiment: string;
}

const MapPage: React.FC = () => {
    const location = useLocation();
    const { state } = location;

    const data: IData = state.response;

    console.log(data);

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
                            <span className={s.topicData}>{data.executor}</span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Текст обращения: </span>
                            <span className={s.topicData}>
                                {data.text_incident}
                            </span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Тема: </span>
                            <span className={s.topicData}>{data.topic}</span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Группа: </span>
                            <span className={s.topicData}>
                                {data.topic_group}
                            </span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Тональность: </span>
                            <span
                                className={s.topicData}
                                style={{
                                    color:
                                        data.sentiment === "Негативная"
                                            ? "red"
                                            : data.sentiment === "Нейтральная"
                                            ? "#d1d111"
                                            : data.sentiment === "Позитивная"
                                            ? "green"
                                            : "",
                                }}
                            >
                                {data.sentiment}
                            </span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Адрес: </span>
                            <span className={s.topicData}>
                                {data?.adress && data.adress.город}
                            </span>
                        </li>
                    </ul>
                </div>

                <div className={s.map}>
                    <RussiaMap data={data} />
                </div>
            </motion.div>
        </section>
    );
};

export default MapPage;
