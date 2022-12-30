import React, { useEffect, useState } from 'react'
import { 
  Paper,
  Grid,
  Typography,
  FormControl,
  TextField,
  Button,
  Avatar,
  Tooltip,
  Chip,
  Divider,
  IconButton,
  LinearProgress,
  Box
} from '@mui/material'
import axios from 'axios'

const MainContainer = () => {
  const [dkLines, setDKLines] = useState({})

  useEffect(() => {
    const fetchTransactionInfo = async () => {
      const response = await axios.get("/api/ping")
      setDKLines(response.data)
      console.log(response.data)
    }
    fetchTransactionInfo().catch((e) => {
      console.log(e)
      console.log("Error fetching Transactions")
    })
    const intervalId = setInterval(() => {
      fetchTransactionInfo().catch(() => {
        console.log("Error fetching Transactions")
      })
    },60000);
    return () => clearInterval(intervalId);
  },[])

  return (
    <Paper sx={{ maxWidth: '100%', textAlign: 'center', overflow: 'hidden', flex: 'auto'  }}>
      Hello
    </Paper>
  )
}

export default MainContainer