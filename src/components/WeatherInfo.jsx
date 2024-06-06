import { Box, Typography } from "@mui/material";
import WeatherDetails from './WeatherDetails.jsx';
import WeatherIcon from './WeatherIcon.jsx';

const WeatherInfo = ({ weather }) => (
  <Box
    sx={{
      mt: 2,
      display: "grid",
      gap: 2,
      textAlign: "center",
    }}
  >
    <Typography variant="h4" component="h2">
      {weather.city}, {weather.country}
    </Typography>
    <WeatherIcon icon={weather.icon} alt={weather.conditionText} />
    <WeatherDetails weather={weather} />
  </Box>
);

export default WeatherInfo;
