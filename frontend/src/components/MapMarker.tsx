import { MapMarkerProps } from "../types";
import "./MapMarker.css";

const MapMarker = (props: MapMarkerProps) => {
  const { text } = props;
  return <div className="map-marker">{text}</div>;
};

export default MapMarker;
