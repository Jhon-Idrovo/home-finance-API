import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import axiosInstance from "../axios";

function Register() {
  const history = useHistory();
  const initialState = Object.freeze({
    username: "",
    password: "",
  });
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {}, []);
  const handleSubmit = (e) => {
    const url = "api/register/";
    e.preventDefault();
    console.log(form);
    axiosInstance
      .post(url, form)
      .then((response) => {
        console.log(response);
        history.push("/login/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 0: "length"
  // 1: "action"
  // 2: "location"
  // 3: "createHref"
  // 4: "push"
  // 5: "replace"
  // 6: "go"
  // 7: "goBack"
  // 8: "goForward"
  // 9: "block"
  // 10: "listen"
  return (
    <div id="login-container">
      <form>
        <h4>Registrate</h4>

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
          value="Crear Cuenta"
          id="submit-btn"
          onClick={handleSubmit}
        />
        <p>
          Ya tienes una cuenta? <a href="/login/">Ingresa aquí</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
