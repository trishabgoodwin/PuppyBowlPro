import { useState, useEffect } from 'react'
import {Routes, Route, Link, useParams} from 'react-router-dom';
import { getDetails } from '../API/index';


function SinglePlayer() {
      const [player, setPlayer] = useState([])

        const {id}= useParams()
        console.log(id)
      async function playerCall (){
          const response = await getDetails(id)
          console.log(response)
          setPlayer(response.data.player)
      } 
      useEffect(()=>{
          playerCall()
      },[])
  
      console.log(player)

  return (
    <>
    <h1>{player.name}</h1>
    <img src={player.imageUrl} style={{height:"300px"}}/><br/>
    <p>Breed:  {player.breed}</p>
    <p>ID:  {player.id}</p>
    <p>Cohort ID:  {player.cohortId}</p>
    <p>Status:  {player.status}</p>
    <p>TeamID:  {player?.teamId}</p>
    </>
  )
}

export default SinglePlayer