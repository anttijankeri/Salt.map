import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 59.3293,
      lng: 18.0686,
    },
    zoom: 4,
  };

  return (
    <div style={{ height: "100vh", width: "100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
