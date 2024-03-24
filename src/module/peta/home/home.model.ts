import {atom, selector} from 'recoil';
import {DummyPoskoList, getSearchMap} from './home.datasource';
import {GetPosko, Pos, Posko, SortType} from './home.interface';

export const getSearchLocation = async (search: string) => {
  const response = await getSearchMap(search);

  return response;
};

export const aPoskoIdSelected = atom<string>({
  key: 'aPoskoIdSelected',
  default: '',
});

export const aPosSearchQuery = atom<string>({
  key: 'aPosSearchQuery',
  default: '',
});

export const aPosSort = atom<SortType>({
  key: 'aPosSort',
  default: 'ASC',
});

export const sGetPosko = selector<GetPosko[]>({
  key: 'sGetPosko',
  get: _ => {
    const poskos: GetPosko[] = DummyPoskoList.map(item => {
      return {
        id: item.id,
        icon: item.icon,
        name: item.name,
      };
    });

    return poskos;
  },
});

export const sGetAllPos = selector<Pos[]>({
  key: 'sGetAllPos',
  get: _ => {
    const pos: Pos[] = [];

    DummyPoskoList.map(posko => {
      posko.pos.map(item => {
        pos.push(item);
      });
    });

    return pos;
  },
});

export const sGetPosList = selector<Pos[]>({
  key: 'sGetPosList',
  get: opts => {
    const id = opts.get(aPoskoIdSelected);
    const query = opts.get(aPosSearchQuery);
    const sort = opts.get(aPosSort);

    const posko = DummyPoskoList.find(item => item.id === id);

    if (posko) {
      return posko.pos
        .filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) =>
          sort === 'ASC'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name),
        );
    } else {
      return [];
    }
  },
});
