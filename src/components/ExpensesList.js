import React, { useState, useEffect } from "react";

import LogNeeded from "./LogNeeded";
import "./styles/ExpensesList.css";
import Expense from "./Expense";
import Loading from "./Loading";
import NoExpenses from "./NoExpenses";
import Error from "./Error";
import axiosInstance from "../axios";

function ExpensesList({ isLoged }) {
  const [expenses, setExpenses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("api/all-expenses/")
      .then((response) => {
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
  }, []);

  if (!isLoged) return <LogNeeded />;
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
