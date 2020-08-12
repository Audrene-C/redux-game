import React from 'react';
import { useDispatch } from "react-redux";

const ButtonCapacity = () => {

    const dispatch = useDispatch()
    const hitMonster = () => {
        dispatch({type: 'hitMonster', payload: {damages: 10}}) 
        dispatch({type: 'hitPlayer', payload: {damages: 15}})
    }
    
    return (
        <button type="button" onClick={() => hitMonster()} className="btn btn-success material-tooltip-main ">
            hit
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
        </button>
    )
}



export default ButtonCapacity;