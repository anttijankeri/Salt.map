import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { IMapProps } from "../types";

import "../style.css";

const GoogleMap = (props: IMapProps) => {
  const { markers } = props;

  const defaultProps = {
    center: {
      lat: props.lat || 59.3293,
      lng: props.lng || 18.0686,
    },
    zoom: 4,
  };

  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers.map((marker) => {
          return (
            <MapMarker
              key={marker.name}
              lat={marker.lat}
              lng={marker.lng}
              text={marker.name}
              color={marker.color}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
