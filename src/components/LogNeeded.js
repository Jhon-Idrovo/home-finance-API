import React from "react";

import { Link } from "react-router-dom";

function LogNeeded() {
  return (
    <div className="message-container">
      <div className="message-box">
        <h3 className="message-header">Vaya!</h3>
        <p>
          Parece que no te has autentificado, por favor
          <Link to="login/"> ingresa aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default LogNeeded;
