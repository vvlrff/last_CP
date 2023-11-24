import React, { useEffect, useState } from "react";
import RussiaRailwayMap from "../../components/Map/RussiaRailwayMap";
import { mapApi } from "../../services/mapApi";
import Loader from "../../components/Loader/Loader";
import s from "./MapPage.module.scss";
import { useLocation } from "react-router-dom";


const MapPage: React.FC = () => {

    // const location = useLocation();
    // const { state } = location;

    // const data = state.response

    return (
        <div className={s.container}>
            <>
                <div className={s.sidebar}>
                    <div>
                        Исполнитель: 
                        {/* {data.executor} */}
                    </div>
                    <div>
                        text_incident: 
                        {/* {data.text_incident} */}
                    </div>
                    <div>
                        topic: 
                        {/* {data.topic} */}
                    </div>
                    <div>
                        topic_group: 
                        {/* {data.topic_group} */}
                    </div>
                </div>

                <div className={s.map}>
                    <RussiaRailwayMap
                    // data={datalistTrainWagon || datalistSupport2}
                    />
                </div>
            </>
        </div>
    );
};

export default MapPage;
