import {GOOGLE_API_KEY} from '../../../config';
import {Posko} from './home.interface';

export const getSearchMap = async (search: string) => {
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    search,
  )}&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const {results} = await response.json();

    return results;
  } catch {
    return null;
  }
};

export const DummyPoskoList: Posko[] = [
  {
    id: 'drugstore-1',
    name: 'Apotek',
    icon: 'https://cdn-icons-png.flaticon.com/512/2645/2645993.png',
    pos: [
      {
        id: 1,
        location: {
          latitude: -7.7886796426678195,
          longitude: 110.36947755637405,
        },
        name: 'Apotek K-24 Kotabaru',
        icon: 'https://cdn-icons-png.flaticon.com/512/2645/2645993.png',
        officerName: 'Budi',
        officerRank: 'Mahir',
        phoneNumber: '081122334455',
      },
      {
        id: 2,
        location: {
          latitude: -7.791929842424438,
          longitude: 110.36559285736494,
        },
        name: 'Apotek Kimia Farma Malioboro',
        icon: 'https://cdn-icons-png.flaticon.com/512/2645/2645993.png',
        officerName: 'Alam',
        officerRank: 'Mahir',
        phoneNumber: '0832323523523',
      },
      {
        id: 3,
        location: {
          latitude: -7.796591022312415,
          longitude: 110.3778084322453,
        },
        name: 'Apotek Pharm 24 Waringin',
        icon: 'https://cdn-icons-png.flaticon.com/512/2645/2645993.png',
        officerName: 'Syahrul',
        officerRank: 'Mahir',
        phoneNumber: '0832323523523',
      },
    ],
  },
  {
    id: 'mosque-1',
    name: 'Masjid',
    icon: 'https://i.pinimg.com/originals/1c/20/29/1c20295e509b59597c9c7b07fb901a06.png',
    pos: [
      {
        id: 4,
        location: {
          latitude: -7.781150522613596,
          longitude: 110.37463861367021,
        },
        name: 'Masjid Baitul Qohhar UII',
        icon: 'https://i.pinimg.com/originals/1c/20/29/1c20295e509b59597c9c7b07fb901a06.png',
        officerName: 'Amir',
        officerRank: 'Ketua',
        phoneNumber: '081122334455',
      },
      {
        id: 5,
        location: {
          latitude: -7.788590867336299,
          longitude: 110.38669828911404,
        },
        name: 'Masjid Al Barokah',
        icon: 'https://i.pinimg.com/originals/1c/20/29/1c20295e509b59597c9c7b07fb901a06.png',
        officerName: 'Bakti',
        officerRank: 'Ketua',
        phoneNumber: '0832323523523',
      },
      {
        id: 6,
        location: {
          latitude: -7.79913631044463,
          longitude: 110.36721448094802,
        },
        name: 'Masjid Muttaqien',
        icon: 'https://i.pinimg.com/originals/1c/20/29/1c20295e509b59597c9c7b07fb901a06.png',
        officerName: 'Juni',
        officerRank: 'Ketua',
        phoneNumber: '0832323523523',
      },
    ],
  },
  {
    id: 'parking-area-1',
    name: 'Area Parkir',
    icon: 'https://cdn-icons-png.flaticon.com/512/4291/4291780.png',
    pos: [
      {
        id: 7,
        location: {
          latitude: -7.782383447980028,
          longitude: 110.37210664149909,
        },
        name: "Area Parkir McDonald's Sudirman",
        icon: 'https://cdn-icons-png.flaticon.com/512/4291/4291780.png',
        officerName: 'Anjas',
        officerRank: 'Ketua',
        phoneNumber: '081122334455',
      },
      {
        id: 8,
        location: {
          latitude: -7.788761322937936,
          longitude: 110.3642102636957,
        },
        name: 'Parkir Slasar Malioboro',
        icon: 'https://cdn-icons-png.flaticon.com/512/4291/4291780.png',
        officerName: 'Andi',
        officerRank: 'Ketua',
        phoneNumber: '0832323523523',
      },
      {
        id: 9,
        location: {
          latitude: -7.797307539057236,
          longitude: 110.3676866649489,
        },
        name: 'Area Parkir Kendaraan Ketandan',
        icon: 'https://cdn-icons-png.flaticon.com/512/4291/4291780.png',
        officerName: 'Ani',
        officerRank: 'Ketua',
        phoneNumber: '0832323523523',
      },
    ],
  },
  {
    id: 'fitness-center-1',
    name: 'Fitness Center',
    icon: 'https://static.vecteezy.com/system/resources/previews/024/193/326/original/gym-or-fitness-center-icon-in-black-line-art-vector.jpg',
    pos: [
      {
        id: 10,
        location: {
          latitude: -7.786667040758988,
          longitude: 110.35755637941435,
        },
        name: 'Muscle GYM',
        icon: 'https://static.vecteezy.com/system/resources/previews/024/193/326/original/gym-or-fitness-center-icon-in-black-line-art-vector.jpg',
        officerName: 'Koko',
        officerRank: 'Ketua',
        phoneNumber: '081122334455',
      },
      {
        id: 11,
        location: {
          latitude: -7.786921515949623,
          longitude: 110.37356424358813,
        },
        name: 'Hardcore Gym Jogja',
        icon: 'https://static.vecteezy.com/system/resources/previews/024/193/326/original/gym-or-fitness-center-icon-in-black-line-art-vector.jpg',
        officerName: 'Bagas',
        officerRank: 'Ketua',
        phoneNumber: '0832323523523',
      },
      {
        id: 12,
        location: {
          latitude: -7.797977369385655,
          longitude: 110.3620626264263,
        },
        name: 'Kartika Dewi Fitness Centre',
        icon: 'https://static.vecteezy.com/system/resources/previews/024/193/326/original/gym-or-fitness-center-icon-in-black-line-art-vector.jpg',
        officerName: 'Bambang',
        officerRank: 'Ketua',
        phoneNumber: '0832323523523',
      },
    ],
  },
];
