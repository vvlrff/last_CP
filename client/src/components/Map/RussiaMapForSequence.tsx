import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IData } from "../../pages/MapPage/MapPage";
import "leaflet/dist/leaflet.css";

const RussiaMapForSequence = ({ data }: { data: IData[] }) => {
    const mapStyle = {
        height: "calc(55vh)",
        display: "flex",
        alignItems: "stretch",
    };

    const center = [60, 80];
    const zoom = 3.3;

    const getIconBySentiment = (sentiment: string) => {
        switch (sentiment) {
            case "Негативная":
                return new L.Icon({
                    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                });
            case "Нейтральная":
                return new L.Icon({
                    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                });
            case "Позитивная":
                return new L.Icon({
                    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                });
            default:
                return null;
        }
    };

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

            {data.map((item: IData) => (
                item.latitude !== null && item.longitude !== null && (
                    <Marker
                        key={`${item.latitude}-${item.longitude}`}
                        position={[item.latitude, item.longitude]}
                        icon={getIconBySentiment(item.sentiment) || undefined}
                    >
                        <Popup>
                            <div>
                                <h3>{item.executor}</h3>
                                <p>Текст инцидента: {item.text_incident}</p>
                                <p>Тема: {item.topic}</p>
                                <p>Город: {item.adress?.город}</p>
                                <p>Sentiment: {item.sentiment}</p>
                            </div>
                        </Popup>
                    </Marker>
                )
            ))}

        </MapContainer>
    );
};

export default RussiaMapForSequence;
