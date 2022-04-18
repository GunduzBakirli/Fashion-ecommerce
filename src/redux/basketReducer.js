let basketItem = [];

function basketReducer(state = basketItem, action) {
  switch (action.type) {
    case "ADD_BASKET":
      return (state = [...state, action.payload]);
    case "Removeitem":
      return (state = state.filter((index) => index.id !== action.payload));
    case "incItem":
      return (state = state.map( e => {
        if (e.id === action.payload) {
          e.quantity++
        }
        return e
      }))
    case "decItem":
      return (state = state.map( e => {
        if (e.id === action.payload) {
          e.quantity--
        }
        return e
      }))
    default:
      return state;
  }
}

export default basketReducer;
