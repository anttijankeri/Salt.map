import { Dispatch, SetStateAction } from "react";

export interface InputButtonProps {
  text: string;
}

export interface PersonButtonProps extends InputButtonProps {
  id: string;
}

export interface IconButtonProps {
  icon: string;
  alt: string;
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

export interface MapMarkerType {
  lat: number;
  lng: number;
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
}

export interface AppContextType {
  state: AppState;
  setState: undefined | Dispatch<SetStateAction<AppState>>;
}
