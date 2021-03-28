import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import axiosInstance from "../axios";

function Login({ isLoged, setIsLoged }) {
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

    axiosInstance.post(url, form).then((response) => {
      if (response.status === 200) {
        const data = response.data;

        localStorage.setItem("access_token", data["access"]);
        localStorage.setItem("refresh_token", data["refresh"]);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + data["access"];
        setIsLoged(true);
        history.push("/create-expense/");
      }
    });
  };
  return (
    <div className="form-container">
      <form className="form">
        <h3 className="form-title">INGRESO</h3>
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
          className="submit-btn"
          onClick={handleSubmit}
        />
        <p>
          No tienes una cuenta? <Link to="/register">Registrate aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
