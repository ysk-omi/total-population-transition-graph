export interface Population {
  year: Number;
  value: Number;
  prefCode: Number;
}

interface PopulationsData {
  label: String;
  data: Population[];
}

export interface Populations {
  boundaryYear: Number;
  data: PopulationsData[];
  prefCode: Number;
}
