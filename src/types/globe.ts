export interface BusinessSchool {
  name: string;
  lat: number;
  lng: number;
  selected?: boolean;
}

export interface GlobeProps {
  onPinClick?: (pin: BusinessSchool) => void;
}
