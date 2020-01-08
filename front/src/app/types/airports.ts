export interface AirportsState {
  airports?: Airport[];
  isPending: boolean;
  totalResults?: number;
  currentPage: number;
  dataPerPage: number;
}

export interface Airport {
  altitude: string;
  city: string;
  country: string;
  databaseTimeZone: string;
  dst: string;
  iata: string;
  icao: string;
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  source: string;
  timeZone: string;
  type: string;
}

export interface SearchParams {
  country: string;
  name: string;
  iata: string;
  page: number;
  dataPerPage: number;
}
