import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <CircularProgress size={70} />
    </Box>
  );
};

export default Spinner;
