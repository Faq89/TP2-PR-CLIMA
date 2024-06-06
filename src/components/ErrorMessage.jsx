import { Typography } from "@mui/material";

const ErrorMessage = ({ error }) => (
  <Typography color="error" textAlign="center" sx={{ mt: 2 }}>
    {error}
  </Typography>
);

export default ErrorMessage;
