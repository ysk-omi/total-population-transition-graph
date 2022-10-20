import { Populations } from './../types/Population';
import { Prefacture } from './../types/Prefacture';

const createURL = (api) => {
  return process.env.NEXT_PUBLIC_RESAS_API_ENDPOINT + api;
};

export const fetchPrefecturesList = async () => {
  const url = createURL(process.env.NEXT_PUBLIC_RESAS_API_PREFECTURES);
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY,
    },
  });
  const data = (await res.json()) as { message: string; result: Prefacture[] };
  return data.result;
};

export const fetchPopulation = async (prefCode: Number) => {
  const url = createURL(`${process.env.NEXT_PUBLIC_RESAS_API_POPULATION}?prefCode=${prefCode}&cityCode=-`);
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY,
    },
  });
  const data = (await res.json()) as { message: string; result: Populations[] };
  console.log(data.result);
  return data.result;
};
