import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

// Recibe refugios: { nombre, ubicacion, lat, lng, ... }
type Refugio = {
  id: number;
  nombre: string;
  ubicacion: string;
  lat?: number;
  lng?: number;
};

type Props = {
  refugios: Refugio[];
};

export function RefugiosMap({ refugios }: Props) {
  // Centro aproximado Caracas
  const center: LatLngExpression = [10.48801, -66.87919];
  return (
    <MapContainer center={center} zoom={10} style={{ height: "320px", width: "100%", borderRadius: "1rem" }} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {refugios.map((r) =>
        r.lat && r.lng ? (
          <Marker key={r.id} position={[r.lat, r.lng] as LatLngExpression}>
            <Popup>
              <b>{r.nombre}</b><br />
              {r.ubicacion}
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
}
