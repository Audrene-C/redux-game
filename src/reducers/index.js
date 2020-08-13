const initialState = {
    hasPlayed: [],
    players: {
      1: { name: "Dragon Knight", pv: 235, pvMax: 235, mana: 50, manaMax: 50, id: 1 },
      2: { name: "Nightblade", pv: 110, pvMax: 110, mana: 40, manaMax: 40, id: 2 },
      3: { name: "Templar", pv: 100, pvMax: 100, mana: 80, manaMax: 80, id: 3 },
      4: { name: "Sorcerer", pv: 100, pvMax: 100, mana: 90, manaMax: 90, id: 4 }
    },
    monster: {
      name: "Molag Bal",
      pv: 500,
      pvMax: 500
    }
  };
   
  const rootReducer = (state = initialState, action) => {

    if (action.type === 'hitMonster') {
      let damages = action.payload.damages
      let newState = {
        ...state,
        monster: {
          ...state.monster,
          pv: state.monster.pv - damages
        }
      }
      console.log('hitMonster: ', newState);
      return newState
    }

    if (action.type === 'hitPlayer') {
      let damages = action.payload.damages
      let currentPlayer = action.payload.player
      let newState = {
        ...state,
        players: {
          ...state.players,
          [currentPlayer]: {
            ...state.players[currentPlayer],
            pv: state.players[currentPlayer].pv - damages
          }
        }
      }
      console.log('hitPlayer: ', newState);
      return newState
    }

    if (action.type === 'hasPlayed') {
      let newTable = [action.payload.player]
      let newState = {
        ...state,
        hasPlayed: state.hasPlayed.concat(newTable),
      }
      console.log('hasPlayed: ', newState);
      return newState      
    }

    if (action.type === 'nextTurn') {
      if (state.hasPlayed.length === Object.keys(state.players).length) {
        let newTable = []
        let newState = {
          ...state,
          hasPlayed: newTable,
        }
        console.log('nextTurn: ', newState);
        return newState
      }
    }

      return state;
  }
   
  export default rootReducer;
  