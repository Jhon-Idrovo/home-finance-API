import React, { useState, useEffect } from "react";
import "./styles/ExpensesList.css";
import Expense from "./Expense";
import Loading from "./Loading";
import NoExpenses from "./NoExpenses";
import Error from "./Error";
import axiosInstance from "../axios";

function ExpensesList() {
  const [expenses, setExpenses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  axiosInstance
    .get("api/all-expenses/")
    .then((response) => {
      console.log(response.data, response.data.length);
      if (response.status === 200) {
        setExpenses(response.data);
        setIsLoading(false);
      } else {
        throw Error();
      }
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });

  if (isLoading) return <Loading />;

  try {
    //if we still have expenses of null something went wrong
    if (expenses.length === 0) return <NoExpenses />;
  } catch (error) {
    console.log(error);
    return <Error />;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Tipo</th>
          <th>Descripción</th>
          <th>Monto</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => {
          return <Expense exp={exp} />;
        })}
      </tbody>
    </table>
  );
}

export default ExpensesList;

// return (
//     <div id="exp-container">
//       {expList.map((exp) => {
//         return (
//           <>
//             <div>{exp.date}</div>
//             <div>{exp.exp_type}</div>
//             <div>{exp.description}</div>
//             <div>{exp.amount}</div>
//           </>
//         );
//       })}
//     </div>
//   );
