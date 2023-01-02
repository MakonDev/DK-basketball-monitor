import React from 'react'
import { 
  TableRow,
  TableCell,
} from '@mui/material'

const SingleRow = ({item}) => {
  const edgeThreshold = 15
  const pointsValid = item.points.line !== -1
  const assistsValid = item.assists.line !== -1
  const threesValid = item.threes.line !== -1
  const reboundsValid = item.rebounds.line !== -1
  const turnoversValid = item.turnovers.line !== -1
  const blocksValid = item.blocks.line !== -1
  const stealsValid = item.steals.line !== -1
  const bsValid = item.blocksNsteals.line !== -1
  const praValid = item.PRA.line !== -1
  const prValid = item.PR.line !== -1
  const paValid = item.PA.line !== -1
  const arValid = item.AR.line !== -1

  const pointsEdge = item.points.line !== -1 ? (((item.points.projection-item.points.line)/item.points.line)*100).toFixed(2) : 0
  const assistsEdge = item.assists.line !== -1 ? (((item.assists.projection-item.assists.line)/item.assists.line)*100).toFixed(2) : 0
  const threesEdge = item.threes.line !== -1 ? (((item.threes.projection-item.threes.line)/item.threes.line)*100).toFixed(2) : 0
  const reboundsEdge = item.rebounds.line !== -1 ? (((item.rebounds.projection-item.rebounds.line)/item.rebounds.line)*100).toFixed(2) : 0
  const turnoversEdge = item.turnovers.line !== -1 ? (((item.turnovers.projection-item.turnovers.line)/item.turnovers.line)*100).toFixed(2) : 0
  const blocksEdge = item.blocks.line !== -1 ? (((item.blocks.projection-item.blocks.line)/item.blocks.line)*100).toFixed(2) : 0
  const stealsEdge = item.steals.line !== -1 ? (((item.steals.projection-item.steals.line)/item.steals.line)*100).toFixed(2) : 0
  const bsEdge = item.blocksNsteals.line !== -1 ? (((item.blocksNsteals.projection-item.blocksNsteals.line)/item.blocksNsteals.line)*100).toFixed(2) : 0
  const praEdge = item.PRA.line !== -1 ? (((item.PRA.projection-item.PRA.line)/item.PRA.line)*100).toFixed(2) : 0
  const prEdge = item.PR.line !== -1 ? (((item.PR.projection-item.PR.line)/item.PR.line)*100).toFixed(2) : 0
  const paEdge = item.PA.line !== -1 ? (((item.PA.projection-item.PA.line)/item.PA.line)*100).toFixed(2) : 0
  const arEdge = item.AR.line !== -1 ? (((item.AR.projection-item.AR.line)/item.AR.line)*100).toFixed(2) : 0

  return (
  <TableRow>
    <TableCell align='center' sx={{fontSize: 12}}>
      <span>{item.player}</span>
    </TableCell>
    <TableCell align='center' sx={{fontSize: 12}}>
      <span>{item.points.date}</span>
    </TableCell>
    <TableCell align='center' sx={{fontSize: 12}}>
      <>
        <span>{item.team1}</span>
        <br/>
        v
        <br/>
        <span>{item.team2}</span>
      </>
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(pointsEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        pointsValid ?
        <>
          <span>ETR: {item.points.projection}</span>
          <br/>
          <span>AVG: {item.points.average}</span>
          <br/>
          <span>DK: {item.points.line}</span>
          <br/>
          <span>{pointsEdge}%</span>
          <br/>
          <span style={{color: item.points.projection > item.points.line ? 'blue' : 'black'}}>O: {item.points.overOdds}</span>
          <br/>
          <span style={{color: item.points.projection < item.points.line ? 'blue' : 'black'}}>U: {item.points.underOdds}</span>
        </>
        :
        <span>Line N/A</span>        
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(assistsEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        assistsValid ?
        <>
          <span>ETR: {item.assists.projection}</span>
          <br/>
          <span>AVG: {item.assists.average}</span>
          <br/>
          <span>DK: {item.assists.line}</span>
          <br/>
          <span>{assistsEdge}%</span>
          <br/>
          <span style={{color: item.assists.projection > item.assists.line ? 'blue' : 'black'}}>O: {item.assists.overOdds}</span>
          <br/>
          <span style={{color: item.assists.projection < item.assists.line ? 'blue' : 'black'}}>U: {item.assists.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(threesEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        threesValid ?
        <>
          <span>ETR: {item.threes.projection}</span>
          <br/>
          <span>AVG: {item.threes.average}</span>
          <br/>
          <span>DK: {item.threes.line}</span>
          <br/>
          <span>({threesEdge}%)</span>
          <br/>
          <span style={{color: item.threes.projection > item.threes.line ? 'blue' : 'black'}}>O: {item.threes.overOdds}</span>
          <br/>
          <span style={{color: item.threes.projection < item.threes.line ? 'blue' : 'black'}}>U: {item.threes.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(reboundsEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
    {
        reboundsValid ?
        <>
          <span>ETR: {item.rebounds.projection}</span>
          <br/>
          <span>AVG: {item.rebounds.average}</span>
          <br/>
          <span>DK: {item.rebounds.line}</span>
          <br/>
          <span>({reboundsEdge}%)</span>
          <br/>
          <span style={{color: item.rebounds.projection > item.rebounds.line ? 'blue' : 'black'}}>O: {item.rebounds.overOdds}</span>
          <br/>
          <span style={{color: item.rebounds.projection < item.rebounds.line ? 'blue' : 'black'}}>U: {item.rebounds.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(turnoversEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        turnoversValid ?
        <>
          <span>ETR: {item.turnovers.projection}</span>
          <br/>
          <span>AVG: {item.turnovers.average}</span>
          <br/>
          <span>DK: {item.turnovers.line}</span>
          <br/>
          <span>({turnoversEdge}%)</span>
          <br/>
          <span style={{color: item.turnovers.projection > item.turnovers.line ? 'blue' : 'black'}}>O: {item.turnovers.overOdds}</span>
          <br/>
          <span style={{color: item.turnovers.projection < item.turnovers.line ? 'blue' : 'black'}}>U: {item.turnovers.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(blocksEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        blocksValid ?
        <>
          <span>ETR: {item.blocks.projection}</span>
          <br/>
          <span>AVG: {item.blocks.average}</span>
          <br/>
          <span>DK: {item.blocks.line}</span>
          <br/>
          <span>({blocksEdge}%)</span>
          <br/>
          <span style={{color: item.blocks.projection > item.blocks.line ? 'blue' : 'black'}}>O: {item.blocks.overOdds}</span>
          <br/>
          <span style={{color: item.blocks.projection < item.blocks.line ? 'blue' : 'black'}}>U: {item.blocks.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(stealsEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        stealsValid ?
        <>
          <span>ETR: {item.steals.projection}</span>
          <br/>
          <span>AVG: {item.steals.average}</span>
          <br/>
          <span>DK: {item.steals.line}</span>
          <br/>
          <span>({stealsEdge}%)</span>
          <br/>
          <span style={{color: item.steals.projection > item.steals.line ? 'blue' : 'black'}}>O: {item.steals.overOdds}</span>
          <br/>
          <span style={{color: item.steals.projection < item.steals.line ? 'blue' : 'black'}}>U: {item.steals.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(bsEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        bsValid ?
        <>
          <span>ETR: {item.blocksNsteals.projection}</span>
          <br/>
          <span>AVG: {item.blocksNsteals.average}</span>
          <br/>
          <span>DK: {item.blocksNsteals.line}</span>
          <br/>
          <span>({bsEdge}%)</span>
          <br/>
          <span style={{color: item.blocksNsteals.projection > item.blocksNsteals.line ? 'blue' : 'black'}}>O: {item.blocksNsteals.overOdds}</span>
          <br/>
          <span style={{color: item.blocksNsteals.projection < item.blocksNsteals.line ? 'blue' : 'black'}}>U: {item.blocksNsteals.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(praEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        praValid ?
        <>
          <span>ETR: {item.PRA.projection}</span>
          <br/>
          <span>AVG: {item.PRA.average}</span>
          <br/>
          <span>DK: {item.PRA.line}</span>
          <br/>
          <span>({praEdge}%)</span>
          <br/>
          <span style={{color: item.PRA.projection > item.PRA.line ? 'blue' : 'black'}}>O: {item.PRA.overOdds}</span>
          <br/>
          <span style={{color: item.PRA.projection < item.PRA.line ? 'blue' : 'black'}}>U: {item.PRA.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(prEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        prValid ?
        <>
          <span>ETR: {item.PR.projection}</span>
          <br/>
          <span>AVG: {item.PR.average}</span>
          <br/>
          <span>DK: {item.PR.line}</span>
          <br/>
          <span>({prEdge}%)</span>
          <br/>
          <span style={{color: item.PR.projection > item.PR.line ? 'blue' : 'black'}}>O: {item.PR.overOdds}</span>
          <br/>
          <span style={{color: item.PR.projection < item.PR.line ? 'blue' : 'black'}}>U: {item.PR.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(paEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        paValid ?
        <>
          <span>ETR: {item.PA.projection}</span>
          <br/>
          <span>AVG: {item.PA.average}</span>
          <br/>
          <span>DK: {item.PA.line}</span>
          <br/>
          <span>({paEdge}%)</span>
          <br/>
          <span style={{color: item.PA.projection > item.PA.line ? 'blue' : 'black'}}>O: {item.PA.overOdds}</span>
          <br/>
          <span style={{color: item.PA.projection < item.PA.line ? 'blue' : 'black'}}>U: {item.PA.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: Math.abs(arEdge) >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        arValid ?
        <>
          <span>ETR: {item.AR.projection}</span>
          <br/>
          <span>AVG: {item.AR.average}</span>
          <br/>
          <span>DK: {item.AR.line}</span>
          <br/>
          <span>({arEdge}%)</span>
          <br/>
          <span style={{color: item.AR.projection > item.AR.line ? 'blue' : 'black'}}>O: {item.AR.overOdds}</span>
          <br/>
          <span style={{color: item.AR.projection < item.AR.line ? 'blue' : 'black'}}>U: {item.AR.underOdds}</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
  </TableRow>
  )
}

export default SingleRow