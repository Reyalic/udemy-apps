import { Link as RouterLink, useFormAction} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Alert, Button, checkboxClasses, Grid, Link, TextField, Typography } from '@mui/material'
import{ useMemo } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'

const formData = {
    email: "",
    password: ""
}
export const Login = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const { email, password, onInputChange } = useForm(formData)

  const isAuthenticating = useMemo(() => status === "checking", [status])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(startLoginWithEmailPassword({ email, password }))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }
  return (

    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
            <Grid container>
              <Grid item xs={ 12 } sx={{ mt: 2 }} >
                <TextField 
                  label="email" 
                  type="email" 
                  placeholder='mail@google.com'
                  fullWidth
                  name="email"
                  onChange={onInputChange}
                  value={email}
                />
              </Grid>
              <Grid item xs={ 12 } sx={{ mt: 2 }} >
                <TextField 
                  label="password" 
                  type="password" 
                  placeholder='Password'
                  fullWidth
                  name="password"
                  onChange={onInputChange}
                  value={password}
                />
              </Grid>
              <Grid container display={!!errorMessage ? "" : "none"} sx={{mt: 1}}>
                <Grid item xs={ 12 }>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
              </Grid>
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                    disabled={ isAuthenticating }
                    type="submit" 
                    variant="contained" 
                    fullWidth
                    >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                    disabled={isAuthenticating}
                    onClick={onGoogleSignIn} 
                    variant="contained" 
                    fullWidth>
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Link component={ RouterLink } color="inherit" to="/auth/register" >Create account</Link>
              </Grid>
            </Grid>
          </form>
    </AuthLayout>
  )
}