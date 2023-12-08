import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { useState } from "react";
import { MapMarkerType } from "../types";

const GoogleMap = () => {
  const [marker, setMarker] = useState<MapMarkerType>();

  const defaultProps = {
    center: {
      lat: 59.3293,
      lng: 18.0686,
    },
    zoom: 4,
  };

  const handleMapClick = ({ lat, lng }: { lat: number; lng: number }) => {
    const newMarker = { lat, lng };
    setMarker(newMarker);
  };

  return (
    <div style={{ height: "100vh", width: "100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={handleMapClick}
      >
        {marker && (
          <MapMarker lat={marker.lat} lng={marker.lng} text="My Marker" />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
