export interface RussiaRailwayMapProps {
    data?: TrainData[];
}

export interface TrainData {
    train_index: string;
    station_data: stationTrainData[];
}

export interface stationTrainData {
    ST_ID_DISL: number;
    LATITUDE: number;
    LONGITUDE: number;
    OPERDATE: number;
    ST_ID_DISL_WAGNUM: number[];
    WAGON_AMOUNT: number;
    IS_GONE?: boolean;
}