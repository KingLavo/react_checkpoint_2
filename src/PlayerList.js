import React from 'react'
import Player from './Player'
import players from './players'

const PlayerList = () => {
  return (
    <div className='playerList'>
          {
            players.map((player, index )=>(
                  <Player player={player} key={index}/>
            ))
          }
    </div>
  )
}

export default PlayerList
