interface Population {
  year: Number;
  value: Number;
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
