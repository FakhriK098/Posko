export interface MapSearchProps {
  onSearch: (search: string) => void;
}

export interface CurrentLocationProps {
  onGetCurrentLocation: () => void;
}

export interface Posko {
  id: string;
  name: string;
  icon: string;
  pos: Pos[];
}

export interface Pos {
  id: number;
  name: string;
  icon: string;
  location: Location;
  phoneNumber: string;
  officerName: string;
  officerRank: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface GetPosko {
  id: string;
  name: string;
  icon: string;
}

export interface ModalViewProps {
  visible: boolean;
  onRequestClose: () => void;
}

export interface PetaFilterProps {
  onPressFilter: () => void;
}

export interface ItemPoskoProps {
  item: GetPosko;
  onPress: (id: string, name: string) => void;
}

export type SortType = 'ASC' | 'DESC';
