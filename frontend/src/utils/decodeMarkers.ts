import { MarkerData, NamedMarker } from "../types";

const decodeMarkers = (markers: MarkerData[]) => {
  if (!markers) {
    return [];
  }
  return markers.map((marker) => {
    return {
      lat: marker.latitude / 100000,
      lng: marker.longitude / 100000,
      name: marker.user.name,
      color: marker.color,
    } as NamedMarker;
  });
};

export default decodeMarkers;
