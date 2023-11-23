import React from "react";
import { useLocation } from "react-router-dom";
import s from "./ResultPage.module.scss";


const ResultPage: React.FC = () => {
    const location = useLocation();
    const { state } = location;
    return (
        <div>
            ResultPage
            {state}
        </div>
    );
};

export default ResultPage;
