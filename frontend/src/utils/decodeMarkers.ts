import { MarkerData, NamedMarker } from "../types";

const decodeMarkers = (markers: MarkerData[]) => {
  if (!markers) {
    return [];
  }
  return markers.map((marker) => {
    return {
      lat: marker.latitude,
      lng: marker.longitude,
      name: marker.user.name,
      color: marker.color,
    } as NamedMarker;
  });
};

export default decodeMarkers;
