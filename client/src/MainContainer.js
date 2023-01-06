import React, { useEffect, useState } from 'react'
import { 
  Paper,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@mui/material'
import axios from 'axios'
import SingleRow from './SingleRow'

const MainContainer = () => {
  const [data, setData] = useState([])
  const [injuryData, setInjuryData] = useState([])

  useEffect(() => {
    const fetchTransactionInfo = async () => {
      const responseInj = await axios.get("/api/injury")
      setInjuryData(responseInj.data)
    }
    fetchTransactionInfo().catch((e) => {
      console.log(e)
      console.log("Error fetching data")
    })
  },[])

  useEffect(() => {
    const fetchTransactionInfo = async () => {
      const response = await axios.get("/api/ping")
      setData(response.data)
    }
    fetchTransactionInfo().catch((e) => {
      console.log(e)
      console.log("Error fetching data")
    })
    const intervalId = setInterval(() => {
      fetchTransactionInfo().catch(() => {
        console.log("Error fetching Transactions")
      })
    },120000);
    return () => clearInterval(intervalId)
  },[])

  return (
    <>
      {
        data.length > 0 ?
          <Grid container spacing={2} sx={{width: '100%'}}>
            <Grid item xs={12}>
              <TableContainer sx={{overflow: 'initial', backgroundColor: '#f5f5f5', marginBottom: '15px'}} component={Paper}>
                <Table stickyHeader sx={{height: 'max-content'}} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell align='center' sx={{ width: "5%" }}>Player</TableCell>
                      <TableCell align='center' sx={{ width: "6%" }}>Date</TableCell>
                      <TableCell align='center' sx={{ width: "5%" }}>Teams</TableCell>
                      <TableCell align='center' sx={{ width: "7%" }}>Points</TableCell>
                      <TableCell align='center' sx={{ width: "7%" }}>Assists</TableCell>
                      <TableCell align='center' sx={{ width: "6%" }}>Threes</TableCell>
                      <TableCell align='center' sx={{ width: "6%" }}>Rebounds</TableCell>
                      <TableCell align='center' sx={{ width: "6%" }}>Turnovers</TableCell>
                      <TableCell align='center' sx={{ width: "6%" }}>Blocks</TableCell>
                      <TableCell align='center' sx={{ width: "6%" }}>Steals</TableCell>
                      <TableCell align='center' sx={{ width: "8%" }}>BS</TableCell>
                      <TableCell align='center' sx={{ width: "8%" }}>PRA</TableCell>
                      <TableCell align='center' sx={{ width: "8%" }}>PR</TableCell>
                      <TableCell align='center' sx={{ width: "8%" }}>PA</TableCell>
                      <TableCell align='center' sx={{ width: "8%" }}>AR</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {(data && data.length !==0) && data.map((item) => (
                    <SingleRow key={item.player} item={item} injuryData={injuryData}/>
                  ))}
                </TableBody> 
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        :
        <span>Nah</span>
      }
    </>
  )
}

export default MainContainer