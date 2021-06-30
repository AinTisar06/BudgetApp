

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid,
        imgURL: action.imgURL,
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;
