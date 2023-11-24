import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { RussiaRailwayMapProps, TrainData, stationTrainData } from "../../models/MapInterfaces";
import blackStation from "../../assets/images/blackStation.png";
import greenStation from "../../assets/images/greenStation.png";
import "leaflet/dist/leaflet.css";


const RussiaRailwayMap: React.FC<RussiaRailwayMapProps> = () => {

    const greenStationIcon = new L.Icon({
        iconUrl: greenStation, // Replace with your green icon path
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    });

    const greyStationIcon = new L.Icon({
        iconUrl: blackStation, // Replace with your grey icon path
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    });

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

        </MapContainer>
    );
};

export default RussiaRailwayMap;
