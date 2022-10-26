export interface Population {
  year: number;
  value: number;
  prefCode: number;
}

interface PopulationsData {
  label: string;
  data: Population[];
}

export interface Populations {
  boundaryYear: number;
  data: PopulationsData[];
  prefCode: number;
}
