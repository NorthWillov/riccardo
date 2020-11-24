import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ToastContext = createContext();

export function ToastProvider(props) {
  const [show, setShow] = useToggleState(false);
  return (
    <ToastContext.Provider value={{ show, setShow }}>
      {props.children}
    </ToastContext.Provider>
  );
}
