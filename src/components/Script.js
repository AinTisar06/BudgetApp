import React from "react";

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is {props.info}</p>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {!props.isAdmin && <p>Please Login</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const authInfo = requireAuthentication(Info);
export default authInfo;
