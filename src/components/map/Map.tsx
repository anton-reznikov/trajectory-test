import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapMarkers } from "../../types";
import { Typography } from "@mui/material";

type MapProps = {
  markers: MapMarkers[];
};

const Map = ({ markers }: MapProps) => {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {markers.length > 0 && (
        <Typography marginBottom="1rem" align="center" variant="h4">
          Кликни на маркер
        </Typography>
      )}
      <MapContainer
        center={[59.92712, 30.318651]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "400px" }}
        placeholder={<MapPlaceholder />}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers &&
          markers.length > 0 &&
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
    </div>
  );
};

export default Map;

function MapPlaceholder() {
  return (
    <p>
      Map of Cars.{" "}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  );
}
