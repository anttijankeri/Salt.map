export interface InputButtonProps {
  text: string;
}

export interface InputButtonIconProps {
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
}

export interface MapMarkerProps extends MapMarkerType {
  text: string;
}
