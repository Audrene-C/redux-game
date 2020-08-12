import React from 'react';
import { useSelector } from 'react-redux';
import PlayerCard from './PlayerCard';


const PlayerList = () => {

  const players = useSelector(state => state.players)

  const displayPlayers = () => {
    return Object.keys(players).map(key => (
      <PlayerCard key={players[key].id} player={players[key]} />
    ));
  }
  
  return (
    <div className='row'>
      {displayPlayers()}
    </div>
  );
}

export default PlayerList;