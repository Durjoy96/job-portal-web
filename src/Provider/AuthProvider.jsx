import { useState } from "react";
import { AuthContext } from "../Context/Context";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const authInfo = {
    user,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
