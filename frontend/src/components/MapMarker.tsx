import { MapMarkerProps } from "../types";

import "../style.css";

const MapMarker = (props: MapMarkerProps) => {
  const { text, color } = props;
  return (
    <div className="map-marker" style={{ borderTopColor: color }}>
      <div className="map-marker__text">{text}</div>
    </div>
  );
};

export default MapMarker;
