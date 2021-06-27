import firebase, { googleAuthProvider } from "../firebase/firebase";

const login = (uid) => {
  return {
    type: "LOGIN",
    uid,
  };
};

const logout = () => {
  return { type: "LOGOUT" };
};

const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export { startLogin, startLogout, login, logout };
