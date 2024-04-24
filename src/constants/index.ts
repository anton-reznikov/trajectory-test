import { SortingVariants } from "../types";

export const sortingVariants: SortingVariants[] = [
  {
    id: 1,
    text: "Сначала дороже",
    value: "PriceHighToLow",
  },
  {
    id: 2,
    text: "Сначала дешевле",
    value: "PriceLowToHigh",
  },
  {
    id: 3,
    text: "Сначала новее",
    value: "YearNewToOld",
  },
  {
    id: 4,
    text: "Сначала старее",
    value: "YearOldToNew",
  },
];
