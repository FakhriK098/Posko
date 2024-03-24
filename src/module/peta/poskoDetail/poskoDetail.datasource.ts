import {GOOGLE_API_KEY} from '../../../config';

export const getAddress = async (latitude: number, longitude: number) => {
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const {results} = await response.json();

    return results;
  } catch {
    return null;
  }
};
