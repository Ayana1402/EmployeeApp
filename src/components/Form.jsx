import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import '../Elements/style.css';
import Image from '../Images/4565.jpg';



const Form = () => {
  return (
  <div className='EmpForm'>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '50ch' },padding:'3%'
            }}
            noValidate
            autoComplete="off"
            >
        <Grid container spacing={2} xs={12}>
           <Grid item xs={6}>
           <div className='heading'><h4>Employee Details Form</h4></div>
          </Grid>
      </Grid>
       
        <Grid container spacing={2} xs={12}>
        <Grid item xs={6}>
        <TextField
          id="outlined-error-helper-text"
          label="Name"
        />
        <br></br>
        <TextField
          id="outlined-error-helper-text"
          label="Designation"
        />
        <br></br>
        <TextField
          id="outlined-error-helper-text"
          label="Salary"
        />
        <br></br>
        <TextField
          id="outlined-error-helper-text"
          label="Location"
        />
        <br></br>
        <div style={{paddingLeft:"25%"}}>
        <Button variant="contained" style={{backgroundColor:"#673ab7"}}>Submit</Button>
        </div>
        </Grid>
        <Grid item xs={6}>
        <div class="bg-img"></div>
        </Grid>
      </Grid>
      

            
     </Box>
    </div>
    
  )
}

export default Form