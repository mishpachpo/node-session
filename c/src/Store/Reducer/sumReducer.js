const initialValue = {
  sum: 0,
};

const reducerSum = (state = initialValue, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        sum: state.sum + action.payload,
      };
 case "set":
      return {
        ...state,
        sum: action.payload,
      };
    case "subtract":
      return {
        ...state,
        sum: state.sum - action.payload,
      };
     
 case "clear":
      return {
        ...state,
        sum: 0,
      };
    default:
      return state;
  }
};

export default reducerSum;
