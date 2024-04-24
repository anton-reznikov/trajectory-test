import { Box, Typography } from "@mui/material";
const NoListData = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography textAlign="center" variant="h4">
        Автомобили не найдены
      </Typography>
    </Box>
  );
};

export default NoListData;
