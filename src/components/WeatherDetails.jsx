import { Typography } from "@mui/material";

const WeatherDetails = ({ weather }) => (
  <>
    <Typography variant="h5" component="h3">
      {weather.temperature} °C
    </Typography>
    <Typography variant="h6" component="h4">
      {weather.conditionText}
    </Typography>
  </>
);

export default WeatherDetails;
