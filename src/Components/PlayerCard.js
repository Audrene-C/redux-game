import React from 'react';
import { useSelector } from 'react-redux';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';

const PlayerCard = (props) => {

    const hasPlayed = useSelector(state => state.hasPlayed)
    const turnEnds = hasPlayed.includes(props.player.id)

    return (
        <div key={props.player.id} className={`col-sm-3 card center ${turnEnds ? 'hasPlayed' : ''}`} id={`joueur${props.player.id}`}>

            <div className="card-body text-center">
                <h5 className="card-title">{props.player.name}</h5>
                <ProgressBar pv={props.player.pv} pvMax={props.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar pv={props.player.mana} pvMax={props.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                {turnEnds ? '' : <div className='row'>
                                                    <div >
                                                        <ButtonCapacity player={props.player} />
                                                        <ButtonCapacity player={props.player} />
                                                        <ButtonCapacity player={props.player} />
                                                        <ButtonCapacity player={props.player} />
                                                    </div>
                                                </div >}
                
            </div >
        </div >
    )
}


export default PlayerCard;