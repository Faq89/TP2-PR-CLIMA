import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const SearchForm = ({ city, setCity, loading, onSubmit, error }) => (
  <Box
    sx={{ display: "grid", gap: 2 }}
    component="form"
    autoComplete="off"
    onSubmit={onSubmit}
  >
    <TextField
      id="city"
      label="Ciudad"
      variant="outlined"
      size="small"
      required
      value={city}
      onChange={(e) => setCity(e.target.value)}
      error={error.error}
      helperText={error.message}
    />
    <LoadingButton
      type="submit"
      variant="contained"
      loading={loading}
      loadingIndicator="Buscando..."
    >
      Buscar
    </LoadingButton>
  </Box>
);

export default SearchForm;
