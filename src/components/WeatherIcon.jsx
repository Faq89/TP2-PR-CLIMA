import { Box } from "@mui/material";

const WeatherIcon = ({ icon, alt }) => (
  <Box
    component="img"
    alt={alt}
    src={icon}
    sx={{ margin: "0 auto" }}
  />
);

export default WeatherIcon;
