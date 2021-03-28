import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import axiosInstance from "../axios";

function Logout({ setIsLoged }) {
  const history = useHistory();
  const refreshToken = localStorage.getItem("refresh_token");
  useEffect(() => {
    axiosInstance
      .post("api/logout/", { refresh_token: refreshToken })
      .then((response) => {
        if (response.status == 202) {
          localStorage.removeItem("access_token");
          axiosInstance.defaults.headers["Authorization"] = null;
          setIsLoged(false);
          history.push("/login/");
        }
      });
  }, []);
  return <div></div>;
}

export default Logout;
