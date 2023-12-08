import { MapMarkerProps } from "../types";

const MapMarker = (props: MapMarkerProps) => {
  const { text } = props;
  return <div>{text}</div>;
};

export default MapMarker;
