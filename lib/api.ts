import { Prefacture } from './../types/Prefacture';

const createURL = (api) => {
  return process.env.NEXT_PUBLIC_RESAS_API_ENDPOINT + api;
};

export const fetchPrefectures = async () => {
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
