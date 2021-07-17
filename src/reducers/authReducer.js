const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid,
        imgURL: action.imgURL,
        name: action.name,
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;
