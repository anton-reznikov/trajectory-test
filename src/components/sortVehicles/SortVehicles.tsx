import React, { Dispatch } from "react";
import { SortingTypes } from "../../types";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { sortingVariants } from "../../constants";

type SortVehiclesProps = {
  sortBy: string;
  setSortBy: Dispatch<React.SetStateAction<"" | SortingTypes>>;
  handleSortVehicles: (type: SortingTypes) => void;
};

const SortVehicles = ({ sortBy, setSortBy }: SortVehiclesProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as SortingTypes);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      marginBottom="2rem"
      marginTop="3rem"
    >
      <FormControl sx={{ width: "100%", maxWidth: "300px" }}>
        <InputLabel>Сортировка</InputLabel>
        <Select value={sortBy} label="Сортировка" onChange={handleChange}>
          {sortingVariants.map((variant) => (
            <MenuItem key={variant.id} value={variant.value}>
              {variant.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortVehicles;
