import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ExpRow from "./ExpRow";
import "./styles/CreateExp.css";
import axiosInstance from "../axios";

let numRows = 1;

const baseExpense = [
  {
    name: "exp-1",
    exp_type: "",
    description: "",
    amount: 0,
  },
];
function CreateExp() {
  const [expenses, setExpenses] = useState(baseExpense);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.parentNode);
  };

  const addRow = (e) => {
    e.preventDefault();
    numRows++;
    const newType = document.getElementById("type-1").cloneNode(true);
    newType.setAttribute("id", "type-" + numRows);
    newType.setAttribute("name", "type-" + numRows);
    newType.oninput = adjustDescription;

    const newDescription = document
      .getElementById("description-1")
      .cloneNode(false);
    newDescription.setAttribute("id", "description-" + numRows);
    newDescription.setAttribute("name", "description-" + numRows);

    const newAmount = document.getElementById("amount-1").cloneNode(false);
    newAmount.setAttribute("id", "amount-" + numRows);
    newAmount.setAttribute("name", "amount-" + numRows);

    const tdList = [newType, newDescription, newAmount];
    const newRow = document.createElement("tr");

    for (let i = 0; i < 3; i++) {
      tdList[i].value = "";
      const d1 = document.createElement("td");
      d1.appendChild(tdList[i]);
      newRow.appendChild(d1);
    }
    document.getElementById("table-body").appendChild(newRow);
  };

  function adjustDescription(e) {
    let numRow = e.target.id;
    console.log(numRow);
    numRow = numRow.substring(numRow.indexOf("-") + 1);

    document
      .getElementById("description-" + numRow)
      .setAttribute("list", e.target.value);
  }

  const handleChange = (e) => {
    setExpenses([...expenses]);
  };
  return (
    <div className="exp-container">
      <form id="expenses-form">
        <table>
          <thead>
            <tr className="head-row">
              <th className="table-headers">Tipo</th>
              <th className="table-headers">Descripción</th>
              <th className="table-headers">Monto</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <tr className="exp-row" id="tr-1">
              <td className="exp-entry">
                <input
                  type="text"
                  name="type-1"
                  id="type-1"
                  list="expensesList"
                  onInput={adjustDescription}
                />
              </td>
              <td className="exp-entry">
                <input type="text" name="description-1" id="description-1" />
              </td>
              <td className="exp-entry">
                <input type="number" name="amount-1" id="amount-1" />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <input type="submit" value="Guardar" onClick={handleSubmit} />
          </tfoot>
        </table>
        <button onClick={addRow}>Añadir entrada</button>
      </form>
      <datalist id="expensesList">
        <option value="Alimentación" hidden></option>
        <option value="Farmacia"></option>
        <option value="Servicios básicos"></option>
        <option value="Vestimenta"></option>
        <option value="Ocio(Entreteniemiento en general)"></option>
        <option value="Mascotas"></option>
        <option value="Donaciones"></option>
        <option value="Otros"></option>
      </datalist>
      <datalist id="Alimentación">
        <option className="Food" value="Carne"></option>
        <option className="Food" value="Legumbres"></option>
        <option className="Food" value="Huevos"></option>
        <option className="Food" value="Vegetales"></option>
        <option className="Food" value="Frutas"></option>
      </datalist>
      {/* <!--CLOTHING OPTIONS--> */}
      <datalist id="Vestimenta">
        <option value="Camisas/Blusas" className="Clothes"></option>
        <option value="Zapatos" className="Clothes"></option>
        <option value="Pantalones" className="Clothes"></option>
        <option value="Abrigos" className="Clothes"></option>
        <option value="Adornos" className="Clothes"></option>
      </datalist>
      {/* <!--BASIC SERVICES OPTIONS--> */}
      <datalist id="Servicios básicos">
        <option className="BasicServices" value="Agua Potable"></option>
        <option className="BasicServices" value="Energía Eléctrica"></option>
        <option className="BasicServices" value="Internet"></option>
        <option className="BasicServices" value="Gas"></option>
        <option className="BasicServices" value=""></option>
      </datalist>
      {/* <!--PETS OPTIONS--> */}
      <datalist id="Mascotas">
        <option value="Comida" className="Pets"></option>
        <option value="Accesorios" className="Pets"></option>
        <option value="Farmacia" className="Pets"></option>
      </datalist>
      {/* <!--LEISURE OPTIONS--> */}
      <datalist id="Ocio(Entreteniemiento en general)">
        <option value="Viajes" className="Leisure"></option>
        <option value="Películas" className="Leisure"></option>
        <option value="Videojuegos" className="Leisure"></option>
        <option value="Juguetes varios" className="Leisure"></option>
        <option value="" className="Leisure"></option>
      </datalist>
    </div>
  );
}

export default CreateExp;
