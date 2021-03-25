import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  NavLink,
} from "react-router-dom";
import Expense from "./components/Expense";
import Register from "./components/Register";
import ExpensesList from "./components/ExpensesList";
import { useState, useEffect } from "react";
import DataLoading from "./components/DataLoading";
import Login from "./components/Login";
import CreateExp from "./components/CreateExp";
import axiosInstance from "./axios";

function App() {
  //HOC, returns a function component that renders its argument
  const ExpLoading = DataLoading(ExpensesList);

  const [appState, setAppState] = useState({
    loading: false,
    expenses: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    axiosInstance
      .get("stats/api/")
      .then((response) => response.json())
      .then((data) => setAppState({ loading: false, expenses: data }));
  }, [setAppState]);

  return (
    <Router>
      <nav>
        <div id="first-line">
          <label className="logo">Home Finance</label>
          <ul id="extras">
            <li className="list-item">
              <NavLink
                to="/login"
                className="upper-btn"
                activeClassName="upper-active"
              >
                Login
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                to="/config"
                className="upper-btn"
                activeClassName="upper-active"
              >
                <i className="fas fa-cog"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        <ul>
          <li className="list-item">
            <NavLink to="create-expense/">Registrar Gasto</NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/statistics">Estadísticas</NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/book">Gastos</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/create-expense">
          <CreateExp />
        </Route>
        <Route path="/statistics"></Route>
        <Route path="/book">
          <ExpensesList />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
