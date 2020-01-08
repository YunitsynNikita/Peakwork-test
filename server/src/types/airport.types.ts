export interface AirportSearchParams {
  country: string;
  name: string;
  iata: string;
  page: number;
  dataPerPage: number;
}

export interface PreparedAirportSearchParams {
  [key: string]: string;
}
