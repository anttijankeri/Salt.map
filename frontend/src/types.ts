export interface InputButtonProps {
  text: string;
}

export interface PersonButtonProps extends InputButtonProps {
  id: string;
}

export interface IconButtonProps {
  icon?: string;
  alt?: string;
  link: string;
}

export interface InputTextProps {
  name: string;
  label: string;
  placeholder: string;
}

export interface HeaderDivProps {
  header: string;
  link: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface MapMarkerType extends Coordinates {
  color: string;
}

export interface NamedMarker extends MapMarkerType {
  name: string;
}

export interface MapMarkerProps extends MapMarkerType {
  text: string;
}

export interface IMapProps {
  markers: NamedMarker[];
}

export interface MapPageProps extends IMapProps {}

export interface Person {
  name: string;
  hash: string;
}

export interface AppState {
  selectedPerson: string;
  markers: NamedMarker[];
  people: Person[];
  nameInput: string;
  placedMarker: MapMarkerType | undefined;
}

export interface AppContextType {
  state: AppState;
  updateState: undefined | ((s: AppState) => void);
}

export interface MarkerData {
  latitude: number;
  longitude: number;
  color: string;
  user: {
    name: string;
    hash: string;
  };
}