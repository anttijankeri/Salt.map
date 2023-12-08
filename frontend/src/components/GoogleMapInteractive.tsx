import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { useContext } from "react";
import AppContext from "../Context/Context";
import getRandomColor from "../utils/getRandomColor";

import "../style.css";

const GoogleMap = () => {
  const { state, updateState } = useContext(AppContext);

  const defaultProps = {
    center: {
      lat: 59.3293,
      lng: 18.0686,
    },
    zoom: 4,
  };

  const handleMapClick = ({ lat, lng }: { lat: number; lng: number }) => {
    const newMarker = { lat, lng, color: getRandomColor() };
    updateState!({ ...state, placedMarker: newMarker });
  };

  return (
    <div className="google-map">
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
            color={state.placedMarker.color}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
