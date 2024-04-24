import { Box, Typography } from "@mui/material";

const Error = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Typography variant="h4">
        Произошла ошибка, повторите попытку позже
      </Typography>
    </Box>
  );
};

export default Error;
