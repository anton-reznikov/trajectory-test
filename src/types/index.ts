export interface IVehicle {
  id: number;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
}

export interface IUpdateVehiclePayload {
  name: string;
  model: string;
  price: number;
}

export type SortingTypes =
  | "PriceLowToHigh"
  | "PriceHighToLow"
  | "YearOldToNew"
  | "YearNewToOld";

export type MapMarkers = Pick<
  IVehicle,
  "latitude" | "longitude" | "name" | "model"
>;

export type SortingVariants = {
  id: number;
  text: string;
  value: SortingTypes;
};
