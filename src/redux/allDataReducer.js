let allData = [];

const allDataReducer = (state = allData, action) => {
  switch (action.type) {
      case "All_Data":
          return state = action.payload
    default:
      return state;
  }
};
export default allDataReducer;
