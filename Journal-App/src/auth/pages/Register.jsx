import { Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const Register = () => {
  return (

    <AuthLayout title="Create account">
      <form>
            <Grid container>
              <Grid item xs={ 12 } sx={{ mt: 2 }} >
                <TextField 
                  label="Name" 
                  type="text" 
                  placeholder='John Doe'
                  fullWidth
                />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt: 2 }} >
                <TextField 
                  label="email" 
                  type="email" 
                  placeholder='mail@google.com'
                  fullWidth
                />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt: 2 }} >
                <TextField 
                  label="password" 
                  type="password" 
                  placeholder='Password'
                  fullWidth
                />
              </Grid>
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button variant="contained" fullWidth>
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
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