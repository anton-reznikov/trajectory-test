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
    <div className="container" style={{ marginTop: "3rem" }}>
      <Box display="flex" justifyContent="center" marginBottom="2rem">
        <FormControl sx={{ width: "100%", maxWidth: "300px" }}>
          <InputLabel id="selectSorting">Сортировка</InputLabel>
          <Select
            labelId="selectSorting"
            id="demo-simple-select"
            value={sortBy}
            label="Сортировка"
            onChange={handleChange}
          >
            {sortingVariants.map((variant) => (
              <MenuItem key={variant.id} value={variant.value}>
                {variant.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SortVehicles;
