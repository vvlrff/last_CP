import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IData } from "../../pages/MapPage/MapPage";
import "leaflet/dist/leaflet.css";

const RussiaMap = ({ data }: { data: IData }) => {
    const mapStyle = {
        height: "calc(55vh)",
        display: "flex",
        alignItems: "stretch",
    };

    const center = [data.latitude, data.longitude];
    const zoom = 8;

    const getIconBySentiment = () => {
        switch (data.sentiment) {
            case "Негативная":
                return new L.Icon({
                    iconUrl:
                        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                });
            case "Нейтральная":
                return new L.Icon({
                    iconUrl:
                        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                });
            case "Позитивная":
                return new L.Icon({
                    iconUrl:
                        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                });
            default:
                return null;
        }
    };

    const markerIcon = getIconBySentiment();

    return (
        <MapContainer
            style={mapStyle}
            center={center as [number, number]}
            zoom={zoom}
            maxZoom={20}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {data.latitude && data.longitude && markerIcon && (
                <Marker
                    position={[data.latitude, data.longitude]}
                    icon={markerIcon}
                >
                    <Popup>
                        <div>
                            <h3>{data.executor}</h3>
                            <p>Текст инцидента: {data.text_incident}</p>
                            <p>Тема: {data.topic}</p>
                            <p>Город: {data.adress?.город}</p>
                            <p>
                                Тональность: 
                                <span
                                    style={{
                                        color:
                                            data.sentiment === "Негативная"
                                                ? "red"
                                                : data.sentiment ===
                                                  "Нейтральная"
                                                ? "#d1d111"
                                                : data.sentiment ===
                                                  "Позитивная"
                                                ? "green"
                                                : "",
                                    }}
                                >
                                    {data.sentiment}
                                </span>
                            </p>
                        </div>
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default RussiaMap;
