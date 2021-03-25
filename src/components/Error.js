import React from "react";
import "./styles/Error.css";

function Error() {
  return (
    <div className="message-container">
      <div className="message-box">
        <h3 className="message-header">Disculpas</h3>
        <p>
          Parece que hubo un error con nuestros servidores, estamos trabajando
          para solucionarlo lo antes posible
        </p>
      </div>
    </div>
  );
}

export default Error;
