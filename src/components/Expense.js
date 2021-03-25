import React, { useState, useEffect } from "react";
import "./styles/Expense.css";

const EXP_TYPES = [];
const EXP_DESC = [];

function Expense({ exp }) {
  return (
    <>
      <tr key={exp.id}>
        <td>{exp.date}</td>
        <td>{exp.exp_type}</td>
        <td>{exp.description}</td>
        <td>{exp.amount}</td>
      </tr>
    </>
  );
}

export default Expense;
