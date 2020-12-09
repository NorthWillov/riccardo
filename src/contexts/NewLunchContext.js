import React, { useState, createContext } from "react";

export const NewLunchContext = createContext();

export function NewLunchProvider(props) {
  const [newLunch, setNewLunch] = useState();
  return (
    <NewLunchContext.Provider value={{ newLunch, setNewLunch }}>
      {props.children}
    </NewLunchContext.Provider>
  );
}
