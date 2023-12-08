import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { useContext } from "react";
import AppContext from "../Context/Context";

const GoogleMap = () => {
  const { state, setState } = useContext(AppContext);

  const defaultProps = {
    center: {
      lat: 59.3293,
      lng: 18.0686,
    },
    zoom: 4,
  };

  const defaultColor = "#ff3333";

  const handleMapClick = ({ lat, lng }: { lat: number; lng: number }) => {
    const newMarker = { lat, lng };
    setState!({ ...state, placedMarker: newMarker });
  };

  return (
    <div style={{ height: "100vh", width: "100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={handleMapClick}
      >
        {state.placedMarker && (
          <MapMarker
            lat={state.placedMarker.lat}
            lng={state.placedMarker.lng}
            text="My Marker"
            color={defaultColor}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
