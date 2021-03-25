import React from "react";

function ExpRow() {
  return (
    <tr className="exp-row">
      <td className="exp-entry">
        <input type="text" name="type" id="type" />
      </td>
      <td className="exp-entry">
        <input type="text" name="description" id="description" />
      </td>
      <td className="exp-entry">
        <input type="number" name="amount" id="amount" />
      </td>
    </tr>
  );
}

export default ExpRow;
