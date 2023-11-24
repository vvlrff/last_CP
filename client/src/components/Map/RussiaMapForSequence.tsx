import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IData } from "../../pages/MapPage/MapPage";
import "leaflet/dist/leaflet.css";


const RussiaMapForSequence = (
    // { data }: { data: IData }
    ) => {

    // console.log(data)

    const greenIcon = new L.Icon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const redIcon = new L.Icon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const yellowIcon = new L.Icon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const mapStyle = {
        height: "calc(55vh)",
        display: "flex",
        alignItems: "stretch",
    };

    const center = [60, 80]; 
    const zoom = 3.3; 

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

            {/* {data.latitude && data.longitude && (
                <Marker
                    position={[data.latitude, data.longitude]}
                    icon={redIcon} 
                >
                    <Popup>
                        <div>
                            <h3>{data.executor}</h3>
                            <p>Текст инцидента: {data.text_incident}</p>
                            <p>Тема: {data.topic}</p>
                            <p>Город: {data.adress?.город}</p>
                        </div>
                    </Popup>
                </Marker>
            )} */}

        </MapContainer>
    );
};

export default RussiaMapForSequence;

