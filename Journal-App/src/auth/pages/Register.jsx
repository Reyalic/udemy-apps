import { Link as RouterLink} from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startRegisterWithEmailPassword } from '../../store/auth'

const formData = {
  email: "",
  password: "",
  displayName: ""
}

const formValidations = {
  email: [(value) => value.includes("@"), "Please type a valid email"],
  password: [(value) => value.length >= 6, "Password must have at least 6 characters"],
  displayName: [(value) => value.length >= 1, "Name is required"],
}

export const Register = () => {

  const dispatch = useDispatch()

  const [formSubmited, setFormSubmited] = useState(false)

  const { status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === "checking", [status])

  const { displayName, email, password, onInputChange, isFormValid, emailValid, passwordValid, displayNameValid, formState } = useForm(formData, formValidations)

  const onSubmit = e => {
    e.preventDefault()
    setFormSubmited(true)

    if (!isFormValid) return

    dispatch(startRegisterWithEmailPassword(formState))
  }
  
  return (

    <AuthLayout title="Create account">
      <form onSubmit={onSubmit}>
        <h1>{isFormValid}</h1>
            <Grid container>
              <Grid item xs={ 12 } sx={{ mt: 2 }} >
                <TextField 
                  label="name" 
                  type="text" 
                  placeholder='John Doe'
                  fullWidth
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange}
                  error={!!displayNameValid && formSubmited}
                  helperText={displayNameValid}
                />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt: 2 }} >
                <TextField 
                  label="email" 
                  type="text" 
                  placeholder='mail@google.com'
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  error={!!emailValid && formSubmited}
                  helperText={emailValid}
                />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt: 2 }} >
                <TextField 
                  label="password" 
                  type="password" 
                  placeholder='Password'
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  error={!!passwordValid && formSubmited}
                  helperText={passwordValid}
                />
              </Grid>
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>

                <Grid item xs={ 12 } display={!!errorMessage ? "" : "none"}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>

                <Grid item xs={ 12 }>
                  <Button disabled={ isCheckingAuthentication } type="submit" variant="contained" fullWidth>
                    Create Account
                  </Button>
                </Grid>

              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Typography sx={{ mr: 1 }}>Do yo have an account?</Typography>
                <Link component={ RouterLink } color="inherit" to="/auth/login" >Login</Link>
              </Grid>
            </Grid>
          </form>
    </AuthLayout>
  )
}