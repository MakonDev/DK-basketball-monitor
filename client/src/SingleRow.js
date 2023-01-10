import React from 'react'
import { 
  TableRow,
  TableCell,
  Tooltip,
  Avatar
} from '@mui/material'

const SingleRow = ({item, injuryData, edgeThreshold}) => {

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

  const pointsEdge = item.points.line !== -1 ? item.points.poissonEdge : 0
  const assistsEdge = item.assists.line !== -1 ? item.assists.poissonEdge : 0
  const threesEdge = item.threes.line !== -1 ? item.threes.poissonEdge : 0
  const reboundsEdge = item.rebounds.line !== -1 ? item.rebounds.poissonEdge : 0
  const turnoversEdge = item.turnovers.line !== -1 ? item.turnovers.poissonEdge : 0
  const blocksEdge = item.blocks.line !== -1 ? item.blocks.poissonEdge : 0
  const stealsEdge = item.steals.line !== -1 ? item.steals.poissonEdge : 0
  const bsEdge = item.blocksNsteals.line !== -1 ? item.blocksNsteals.poissonEdge : 0
  const praEdge = item.PRA.line !== -1 ? item.PRA.poissonEdge : 0
  const prEdge = item.PR.line !== -1 ? item.PR.poissonEdge : 0
  const paEdge = item.PA.line !== -1 ? item.PA.poissonEdge : 0
  const arEdge = item.AR.line !== -1 ? item.AR.poissonEdge : 0

  const teamEntry1 = injuryData.find((entry) => entry.team === item.team1)
  let team1Desc = ""
  if (teamEntry1) {
    team1Desc = teamEntry1.description
  } 
  const teamEntry2 = injuryData.find((entry) => entry.team === item.team2)
  let team2Desc = ""
  if (teamEntry2) {
    team2Desc = teamEntry2.description
  } 

  const filteredInjuryTeam = injuryData.filter((team) => team.lineup.includes(item.player))
  const isStarter = filteredInjuryTeam.length > 0

  let injuryDesignations = []
  for (const injurySet of injuryData) {
    const filtered = injurySet.injuries.filter((entry) => entry[0] === item.player)
    if (filtered.length > 0) {
      injuryDesignations = filtered[0]
    }
  }

  const designation = injuryDesignations.length > 0 ? 
    (injuryDesignations[1] === "Available" || injuryDesignations[1] === "In" || injuryDesignations[1] === "Not on injury report") ? 'green' 
      : (injuryDesignations[1] === "Questionable" || injuryDesignations[1] === "Probable" || injuryDesignations[1] === "Doubtful") ? 'orange' 
        : 'black' 
      : (injuryDesignations[1] === "Out" || injuryDesignations[1] === "Injured") ? 'red' 
        : 'black'

  return (
  <TableRow>
    <TableCell align='center' sx={{fontSize: 12}}>
      <Tooltip title={injuryDesignations.length > 0 ? injuryDesignations[1] : "Not mentioned"} placement={"top"}>
        <span style={{color: designation}}>{item.player}</span>
      </Tooltip>
      {
        isStarter  &&
        <Tooltip title={
          "Starter"
        }>
          <Avatar sx={{ marginLeft: 'auto', marginRight: 'auto', width: 20, height: 20 }} src={'https://tse4.mm.bing.net/th?id=OIP.20NY7KckCi6uATh-pn3EogHaHv'} />
        </Tooltip>
      }
    </TableCell>
    <TableCell align='center' sx={{fontSize: 12}}>
      <span>{item.points.date}</span>
    </TableCell>
    <TableCell align='center' sx={{fontSize: 12}}>
      <>
        <Tooltip placement={"top"} title={team1Desc}>
          <span>
            {item.team1}
          </span>
        </Tooltip>
        <br/>
        v
        <br/>
        <Tooltip placement={"bottom"} title={team2Desc}>
          <span>
            {item.team2}
          </span>
        </Tooltip>
      </>
    </TableCell>
    <TableCell align='center' sx={{border: pointsEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        pointsValid ?
        <>
          <span>ETR: {item.points.projection}</span>
          <br/>
          <span>AVG: {item.points.average}</span>
          <br/>
          <span>DK: {item.points.line}</span>
          <br/>
          <span>({pointsEdge}%)</span>
          <br/>
          <span style={{color: item.points.projection > item.points.line ? 'blue' : 'black'}}>O: {item.points.overOdds}</span>
          <br/>
          <span style={{color: item.points.projection < item.points.line ? 'blue' : 'black'}}>U: {item.points.underOdds}</span>
          <br/>
          <br/>
          <span>O: {Math.round(item.points.poissonOverOdds)} ({Math.round(item.points.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.points.poissonUnderOdds)} ({Math.round(item.points.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>        
      }
    </TableCell>
    <TableCell align='center' sx={{border: assistsEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
      {
        assistsValid ?
        <>
          <span>ETR: {item.assists.projection}</span>
          <br/>
          <span>AVG: {item.assists.average}</span>
          <br/>
          <span>DK: {item.assists.line}</span>
          <br/>
          <span>({assistsEdge}%)</span>
          <br/>
          <span style={{color: item.assists.projection > item.assists.line ? 'blue' : 'black'}}>O: {item.assists.overOdds}</span>
          <br/>
          <span style={{color: item.assists.projection < item.assists.line ? 'blue' : 'black'}}>U: {item.assists.underOdds}</span>
          <br/>
          <br/>
          <span>O: {Math.round(item.assists.poissonOverOdds)} ({Math.round(item.assists.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.assists.poissonUnderOdds)} ({Math.round(item.assists.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: threesEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
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
          <br/>
          <br/>
          <span>O: {Math.round(item.threes.poissonOverOdds)} ({Math.round(item.threes.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.threes.poissonUnderOdds)} ({Math.round(item.threes.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: reboundsEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
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
          <br/>
          <br/>
          <span>O: {Math.round(item.rebounds.poissonOverOdds)} ({Math.round(item.rebounds.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.rebounds.poissonUnderOdds)} ({Math.round(item.rebounds.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: turnoversEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
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
          <br/>
          <br/>
          <span>O: {Math.round(item.turnovers.poissonOverOdds)} ({Math.round(item.turnovers.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.turnovers.poissonUnderOdds)} ({Math.round(item.turnovers.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: blocksEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
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
          <br/>
          <br/>
          <span>O: {Math.round(item.blocks.poissonOverOdds)} ({Math.round(item.blocks.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.blocks.poissonUnderOdds)} ({Math.round(item.blocks.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: stealsEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
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
          <br/>
          <br/>
          <span>O: {Math.round(item.steals.poissonOverOdds)} ({Math.round(item.steals.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.steals.poissonUnderOdds)} ({Math.round(item.steals.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: bsEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
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
          <br/>
          <br/>
          <span>O: {Math.round(item.blocksNsteals.poissonOverOdds)} ({Math.round(item.blocksNsteals.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.blocksNsteals.poissonUnderOdds)} ({Math.round(item.blocksNsteals.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: praEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
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
          <br/>
          <br/>
          <span>O: {Math.round(item.PRA.poissonOverOdds)} ({Math.round(item.PRA.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.PRA.poissonUnderOdds)} ({Math.round(item.PRA.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: prEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
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
          <br/>
          <br/>
          <span>O: {Math.round(item.PR.poissonOverOdds)} ({Math.round(item.PR.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.PR.poissonUnderOdds)} ({Math.round(item.PR.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: paEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
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
          <br/>
          <br/>
          <span>O: {Math.round(item.PA.poissonOverOdds)} ({Math.round(item.PA.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.PA.poissonUnderOdds)} ({Math.round(item.PA.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
    <TableCell align='center' sx={{border: arEdge >= edgeThreshold ? '3px solid green': '', fontSize: 12}}>
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
          <br/>
          <br/>
          <span>O: {Math.round(item.AR.poissonOverOdds)} ({Math.round(item.AR.poissonOverPercentage*100)}%)</span>
          <br/>
          <span>U: {Math.round(item.AR.poissonUnderOdds)} ({Math.round(item.AR.poissonUnderPercentage*100)}%)</span>
        </>
        :
        <span>Line N/A</span>
      }
    </TableCell>
  </TableRow>
  )
}

export default SingleRow