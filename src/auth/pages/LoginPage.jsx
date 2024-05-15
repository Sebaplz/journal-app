import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  checkingAuthenticaction,
  startGoogleSignIn,
} from "../../store/auth/thunks";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "seba@google.com",
    password: "123456",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthenticaction(email, password));
  };

  const onGoogleSignIn = () => {
    console.log("Google Sign In");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Constraseña"
              type="password"
              placeholder="********"
              fullWidth
              name="password"
              onChange={onInputChange}
              value={password}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Iniciar Sesión con Google
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Link color="inherit" to="/auth/register" component={RouterLink}>
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
