import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
// import { RussiaRailwayMapProps, TrainData, stationTrainData } from "../../models/MapInterfaces";
import blackStation from "../../assets/images/blackStation.png";
import greenStation from "../../assets/images/greenStation.png";
import "leaflet/dist/leaflet.css";
import { IData } from "../../pages/MapPage/MapPage";


const RussiaMap = ({ data }: { data: IData }) => {

    console.log(data)



    const mapStyle = {
        height: "calc(93vh)",
        display: "flex",
        alignItems: "stretch",
    };

    const center = [53.7558, 53.6176]; // Координаты центра России
    const zoom = 4; // Начальный уровень масштабирования

    return (
        <MapContainer
            style={mapStyle}
            center={center as [number, number]}
            zoom={zoom}
            maxZoom={20}
        >
            {/* Цветные тайлы OpenStreetMap */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {data.latitude && data.longitude && (
                <Marker position={[data.latitude, data.longitude]}>
                    <Popup>
                        <div>
                            <h3>{data.executor}</h3>
                            <p>Текст инцидента: {data.text_incident}</p>
                            <p>Тема: {data.topic}</p>
                            <p>Город: {data.adress?.город}</p>
                        </div>
                    </Popup>
                </Marker>
            )}

        </MapContainer>
    );
};

export default RussiaMap;


// const greenStationIcon = new L.Icon({
//     iconUrl: greenStation, // Replace with your green icon path
//     iconSize: [30, 30],
//     iconAnchor: [15, 30],
//     popupAnchor: [0, -30],
// });

// const greyStationIcon = new L.Icon({
//     iconUrl: blackStation, // Replace with your grey icon path
//     iconSize: [30, 30],
//     iconAnchor: [15, 30],
//     popupAnchor: [0, -30],
// });