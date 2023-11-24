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
                    <div>
                        <span className={s.topic}>Исполнитель: </span>
                        <span className={s.topicData}>123</span>
                        {/* {data.executor} */}
                    </div>
                    <div>
                        <span className={s.topic}>text_incident: </span>
                        <span className={s.topicData}>123</span>
                        {/* {data.text_incident} */}
                    </div>
                    <div>
                        <span className={s.topic}>topic: </span>
                        <span className={s.topicData}>123</span>
                        {/* {data.topic} */}
                    </div>
                    <div>
                        <span className={s.topic}>topic_group: </span>
                        <span className={s.topicData}>123</span>
                        {/* {data.topic_group} */}
                    </div>
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
