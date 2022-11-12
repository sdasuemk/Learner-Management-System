import React, { useState } from 'react'
import { Button, TextField, FormControl, InputLabel, MenuItem, Select, Box, Typography } from '@mui/material';


const Login = () => {

  const [inputs, setInputs] = useState({
    email:'',
    password:'',
    user:''
  })
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }
  return (
    <>
      <Box>
        <Typography></Typography>
      </Box>
      <form onSubmit={handleSubmit}>
      <FormControl sx={{margin:'10px', width: '200px'}}> 
          <InputLabel id="demo-simple-select-label">Select your login type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={inputs.user}
              label="User Types"
              onChange={handleChange}
              name='user'
            >
              <MenuItem value={'admin'}>Admin</MenuItem>
              <MenuItem value={'career-team'}>Career Service Team</MenuItem>
              <MenuItem value={'faculty'}>Faculty</MenuItem>
              <MenuItem value={'learners'}>Learners</MenuItem>
            </Select>
        </FormControl>
        <br/>
        <TextField required
            name='email'
            value={inputs.email}
            onChange={handleChange}
            label='Email'
            placeholder='example@domain.com'
            type='text'
            variant='outlined'
            sx={{margin: '10px', width: '200px'}}
        />
        <br/>
        <TextField required
            name='password'
            value={inputs.password}
            onChange={handleChange}
            label='Password'
            placeholder='Enter password'
            type='password'
            variant='outlined'
            sx={{margin: '10px', width: '200px'}}
        />
        <br/>
        <Button
          variant="contained"
          type='submit'
          color='error'
        >
          Login
        </Button>
        
      </form>
    </>
  )
}

export default Login