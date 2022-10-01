export const initialState = {
    host: "Dubjay",
    startTime: "7:50",
    endTime: "10:50",
    startDate: "10/1/2022",
    endDate: "10/1/2022",
    image: null
  };
  export const actionTypes = {
    SET_HOST: "SET_HOST",
  
    SET_START_TIME: "SET_START_TIME",
    SET_END_TIME: "SET_END_TIME",
    SET_START_DATE: "SET_START_DATE",
    SET_END_DATE: "SET_END_DATE",
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case actionTypes.SET_HOST:
        return {
          host: action.host,
        };
      case actionTypes.SET_START_TIME:
        return {
          ...state,
          startTime: action.startTime,
        };
      case actionTypes.SET_START_DATE:
        return {
          ...state,
          startDate: action.startDate,
        };
      case actionTypes.SET_END_TIME:
        return {
          ...state,
          endTime: action.endTime,
        };
      case actionTypes.SET_END_DATE:
        return {
          ...state,
          endDate: action.endDate,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;