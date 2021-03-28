import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  NavLink,
} from "react-router-dom";
import Register from "./components/Register";
import ExpensesList from "./components/ExpensesList";
import { useState } from "react";
import Logout from "./components/Logout";
import Login from "./components/Login";
import CreateExp from "./components/CreateExp";
import Statistics from "./components/Statistics";

function App() {
  const [isLoged, setIsLoged] = useState(
    Boolean(localStorage.getItem("access_token"))
  );

  return (
    <Router>
      <nav>
        <div id="first-line">
          <label className="logo">Home Finance</label>
          <ul id="extras">
            <li className="list-item">
              {!isLoged ? (
                <NavLink
                  to="/login"
                  className="upper-btn"
                  activeClassName="upper-active"
                >
                  Login
                </NavLink>
              ) : (
                <NavLink
                  to="/logout"
                  className="upper-btn"
                  activeClassName="upper-active"
                >
                  Logout
                </NavLink>
              )}
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
            <NavLink to="/create-expense">Registrar Gasto</NavLink>
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
          <CreateExp isLoged={isLoged} />
        </Route>
        <Route path="/statistics">
          <Statistics isLoged={isLoged} />
        </Route>
        <Route path="/book">
          <ExpensesList isLoged={isLoged} />
        </Route>
        <Route path="/login">
          <Login isLoged={isLoged} setIsLoged={setIsLoged} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/logout">
          <Logout setIsLoged={setIsLoged} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
