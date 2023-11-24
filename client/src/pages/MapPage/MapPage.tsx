import React, { useEffect, useState } from "react";
import RussiaRailwayMap from "../../components/Map/RussiaRailwayMap";
import { mapApi } from "../../services/mapApi";
import Loader from "../../components/Loader/Loader";
import s from "./MapPage.module.scss";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MapPage: React.FC = () => {
    // const location = useLocation();
    // const { state } = location;

    // const data = state.response

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
                                {data.executor}
                            </span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Введенный текст: </span>
                            <span className={s.topicData}>
                                {data.text_incident}
                            </span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Тема: </span>
                            <span className={s.topicData}>
                                {data.topic}
                            </span>
                        </li>
                        <li className={s.item}>
                            <span className={s.topic}>Группа: </span>
                            <span className={s.topicData}>
                                {data.topic_group}
                            </span>
                        </li>
                    </ul>
                </div>

                <div className={s.map}>
                    <RussiaRailwayMap
                    // data={datalistTrainWagon || datalistSupport2}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default MapPage;
