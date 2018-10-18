export interface Event {
  id: string;
  name: string;
  shortAdd?: string;
  city: string;
  state: string;
  banner?: string;
  url?: string;
  raceDate: string;
  racePlace?: string;
  raceMap?: string;
  regUrl?: string;
  regStartDate?: string;
  regStatus: string;
  distance: string;
  categories?: Array<Category>;
  bibDate?: string;
}

export interface Category {
  category: string;
  distance: string;
  fee?: string;
  route?: string;
  startTime?:string;
}
