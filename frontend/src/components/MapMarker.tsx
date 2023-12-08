import { MapMarkerProps } from "../types";

import "../style.css";

const MapMarker = (props: MapMarkerProps) => {
  const { text, color } = props;
  return (
    <div className="map-marker" style={{ color }}>
      {text}
    </div>
  );
};

export default MapMarker;
