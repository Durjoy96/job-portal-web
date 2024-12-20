import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext);
  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      function (error) {
        // console.log("logged out");
        if (error.status === 401 || error.status === 403) {
          signOutUser()
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return instance;
};

export default UseAxiosSecure;
