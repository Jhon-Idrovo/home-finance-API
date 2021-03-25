import React from "react";

function DataLoading(Component) {
  return function ExpLoadingComponent({ isLoading, expenses, ...props }) {
    if (!isLoading) return <Component expList={expenses} />;
    return <p>Cargando los datos</p>;
  };
}

export default DataLoading;
