import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";


function PlayerForm() {
    const [name, setName] = useState('');
    const [breed, setBreed] =useState('');
      
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const newPlayer = {
        name: name,
        breed: breed,
      };
  
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES/players', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newPlayer),
        });
        if (response.ok) {
           const addedPlayer = await response.json();
            setName('');
            setBreed('');
        } else {
        console.error('Failed to add player');

        }}catch (error) {
            console.error('Error adding player:', error);
          };
        }
        return (
        <>
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <div>
        <button type="submit">Add Player</button>
        </div>
      </form>
      </>
    );
  }


export default PlayerForm;