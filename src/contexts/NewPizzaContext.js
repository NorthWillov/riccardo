import React, { useState, createContext } from "react";

export const NewPizzaContext = createContext();

export function NewPizzaProvider(props) {
  const [newPizza, setNewPizza] = useState();
  return (
    <NewPizzaContext.Provider value={{ newPizza, setNewPizza }}>
      {props.children}
    </NewPizzaContext.Provider>
  );
}
