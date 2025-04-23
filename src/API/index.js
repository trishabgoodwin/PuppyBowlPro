
export async function getPlayers() {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES/players`);
    
  const data = await response.json();
    
  return data
  }


  export async function getDetails(id){
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES/players/${id}`)

    const data = await response.json();
    
    return data
  }


