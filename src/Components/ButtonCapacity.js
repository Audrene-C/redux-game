import React from 'react';
import { useDispatch } from "react-redux";

const ButtonCapacity = (props) => {

    const playerId = props.player.id
    const dispatch = useDispatch()
    const hitMonster = (playerId) => {
        dispatch({type: 'hitMonster', payload: {damages: 10}}) 
        dispatch({type: 'hitPlayer', payload: {damages: 15, player: playerId}})
        dispatch({type: 'hasPlayed', payload: {player: playerId}})
        dispatch({type: 'nextTurn', payload: {}})
    }
    
    return (
        <button type="button" onClick={() => hitMonster(playerId)} className="btn btn-success material-tooltip-main ">
            hit
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
        </button>
    )
}



export default ButtonCapacity;