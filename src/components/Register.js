import React, { useState, useEffect } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
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
  return (
    <div className="form-container">
      <form className="form">
        <h3 className="form-title">REGISTRO</h3>

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
          className="submit-btn"
          onClick={handleSubmit}
        />
        <p>
          Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
