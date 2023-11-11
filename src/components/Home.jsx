import React from 'react'
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Elements/style.css';
import axios from "axios";
import { makeStyles } from '@mui/styles';
import Image from '../Images/4565.jpg';


  function createData(name, username, email, phone, website) {
     return { name, username, email, phone, website };
   }
  
  const rows = [];

const Home = () => {
    
    const [data, setData] = useState([]);
    // const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        console.log("Result:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

  return (
    <div>
    {/* <div class="bg-img"></div> */}
    <TableContainer component={Paper} sx={{padding:"5%"}}>
      <Table aria-label="simple table" >
        <TableHead style={{backgroundColor:'#00897b'}}>               
          <TableRow >
            <TableCell style={{color:"white"}}>Emp ID</TableCell>
            <TableCell style={{color:"white"}} align="center">Name</TableCell>
            <TableCell style={{color:"white"}} align="center">Email</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:'#fffde7'}}>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Home