import { MapMarkers } from "../../types";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type MapProps = {
  markers: MapMarkers[];
};

const Map = ({ markers }: MapProps) => {
  return (
    <MapContainer
      center={[59.92712, 30.318651]}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: "400px", marginTop: "1rem" }}
      placeholder={<MapPlaceholder />}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.length > 0 &&
        markers.map((marker) => (
          <Marker
            key={marker.name}
            position={[marker.latitude, marker.longitude]}
          >
            <Popup>
              {marker.name} {marker.model}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Map;

const MapPlaceholder = () => {
  return (
    <p>
      Map of Cars.{" "}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  );
};
