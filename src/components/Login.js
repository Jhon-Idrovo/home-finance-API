import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles/login.css";
import axiosInstance from "../axios";

function Login() {
  const history = useHistory();
  const url = "/api/token/";
  const initialState = Object.freeze({
    username: "",
    password: "",
  });
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    axiosInstance.post(url, form).then((response) => {
      if (response.status === 200) {
        const data = response.data;
        console.log(typeof data);
        localStorage.setItem("acces_token", data["access"]);
        localStorage.setItem("refresh_token", data["refresh"]);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + data["access"];
        history.push("/create-expense/");
      }
    });
  };
  return (
    <div id="login-container">
      <form id="login-form">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nombre de usuario"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Ingresar"
          id="submit-btn"
          onClick={handleSubmit}
        />
        <p>
          No tienes una cuenta? <a href="/register/">Registrate aquí</a>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login;
