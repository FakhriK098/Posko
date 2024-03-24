import {Pos, SortType} from '../home/home.interface';

export interface FilterProps {
  onSubmitSearch: (query: string) => void;
  onChangeSelected: (value: SortType) => void;
}

export interface ItemPosProps {
  item: Pos;
  isHorizontal?: boolean;
}
