const initialState = {
    players: {
      1: { name: "John", pv: 25, pvMax: 110, mana: 15, manaMax: 40, id: 1 },
      2: { name: "Jack", pv: 110, pvMax: 120, mana: 40, manaMax: 50, id: 2 },
      3: { name: "Jessy", pv: 80, pvMax: 130, mana: 25, manaMax: 60, id: 3 },
      4: { name: "Jenny", pv: 130, pvMax: 140, mana: 0, manaMax: 70, id: 4 }
    },
    monster: {
      name: "Hamza",
      pv: 450,
      pvMax: 500
    }
  };
   
  const rootReducer = (state = initialState, action) => {

    if (action.type === 'hitMonster') {
      let newState = {
        ...state,
        monster: {
          ...state.monster,
          pv: state.monster.pv - action.payload.damages
        }
      }
      console.log(newState);
      return newState
    }

    if (action.type === 'hitPlayer') {
      let newState = {
        ...state,
        players: {
          ...state.players,
          // 1: {
          //   ...state.players{1},
          //   pv: state.players{1} - action.payload.damages
          // }
        }
      }
      console.log(newState);
      return newState
    }

      return state;
  }
   
  export default rootReducer;
  