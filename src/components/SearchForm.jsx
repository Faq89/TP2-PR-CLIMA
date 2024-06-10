import { Button, TextField } from '@mui/material';

export default function SearchForm({ city, setCity, loading, onSubmit, error }) {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        label="Ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        error={error.error}
        helperText={error.message}
        disabled={loading}
      />
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        disabled={loading}
      >
        {loading ? 'Buscando...' : 'Buscar'}
      </Button>
    </form>
  );
}
