import { Container, Typography } from "@mui/material";
import { useState } from "react";
import SearchForm from './components/SearchForm.jsx';
import WeatherInfo from './components/WeatherInfo.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&lang=es&q=`;

export default function App() {
  const [city, setCity] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

      const res = await fetch(API_WEATHER + city);
      const data = await res.json();

      if (data.error) {
        throw { message: "No se pudo encontrar la ciudad" };
      }

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } catch (error) {
      setError({ error: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Clima App
      </Typography>

      <SearchForm
        city={city}
        setCity={setCity}
        loading={loading}
        onSubmit={onSubmit}
        error={error}
      />

      {weather.city && <WeatherInfo weather={weather} />}

      <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
        Powered by:{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
}
