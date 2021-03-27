import React from "react";

function ExpRow({ handleChange, exp, index }) {
  return (
    <tr className="exp-row">
      <td className="type-entry">
        <input
          type="text"
          list="expensesList"
          onChange={(e) => handleChange(e, e.target.name, "expType")}
          value={exp.expType}
          placeholder="Tipo"
          name={index}
        />
      </td>
      <td className="description-entry">
        <input
          type="text"
          value={exp.description}
          onChange={(e) => handleChange(e, e.target.name, "description")}
          placeholder="Descripción"
          name={index}
          list={exp.expType}
        />
      </td>
      <td className="amount-entry">
        <input
          type="number"
          value={exp.amount}
          onChange={(e) => handleChange(e, e.target.name, "amount")}
          placeholder="0.00"
          name={index}
        />
      </td>
    </tr>
  );
}

export default ExpRow;
