export const initialState = {
  class: {
    Home: 'section',
    About: 'section',
    Work: 'section',
    End: 'section',
  },
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TARGET_SECTION':
      let newState = Object.assign({}, state.class);
      for (const key in newState) {
        newState[key] = 'not-target-section';
      }
      newState[action.payload] = 'section is-expanded';
      return {
        ...state,
        class: newState,
      };

    case 'CLOSE_TARGET_SECTION':
      let oldState = Object.assign({}, state.class);
      for (const key in oldState) {
        oldState[key] = 'section';
      }
      return {
        ...state,
        class: oldState,
      };

    default:
      return state;
  }
}
