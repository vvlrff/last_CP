import React, { useEffect, useState } from "react";
import RussiaRailwayMap from "../../components/Map/RussiaRailwayMap";
import { mapApi } from "../../services/mapApi";
import Loader from "../../components/Loader/Loader";
import s from "./MapPage.module.scss";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";


export interface IData {
    executor: string
    text_incident: string
    topic: string
    topic_group: string
    adress: {
        город?: string
    }
}

const MapPage: React.FC = () => {
    const location = useLocation();
    const { state } = location;

    const data: IData = state.response

    console.log(data)

    return (
        <section className={s.section}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={s.container}
            >
                <div className={s.sidebar}>
                    <div>
                        Исполнитель:
                        {data.executor}
                    </div>
                    <div>
                        Текст инцидента:
                        {data.text_incident}
                    </div>
                    <div>
                        Тема:
                        {data.topic}
                    </div>
                    <div>
                        Группа тем:
                        {data.topic_group}
                    </div>
                    <div>
                        Местоположение:
                        {data?.adress && data.adress.город}
                    </div>
                </div>

                <div className={s.map}>
                    <RussiaRailwayMap
                        data={data}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default MapPage;
