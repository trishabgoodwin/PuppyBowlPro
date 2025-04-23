import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import { getPlayers } from '../API/index';
import { useNavigate } from 'react-router-dom';
import SinglePlayer from './SinglePlayer';


function AllPlayers() {
    const [players, setPlayers] = useState([])

    async function playersCall (){
        const response = await getPlayers()
        console.log(response)
        setPlayers(response.data.players)
    } 
    useEffect(()=>{
        playersCall()
    },[])

    console.log(players)

    const navigate = useNavigate();

    const handleClick = (player) => {
        navigate(`/SinglePlayer/${player.id}`);
      };

    
  return (
    <>
    <h1>Here are our Players!</h1>
    {
        players.map((player)=>
        <div key={player.id}>
            <h3>{player.name}</h3>
            <img src={player.imageUrl} style={{height:"150px"}}/><br/>
            <div>
                <button onClick={()=> handleClick(player)}>Details</button>
            </div>
        </div>
        )
    }


    </>
  )
}

export default AllPlayers

