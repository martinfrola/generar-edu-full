import { createContext, useContext, useReducer } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children, reducer, initialCarrito }) => (
  <CarritoContext.Provider value={useReducer(reducer, initialCarrito)}>
    {children}
  </CarritoContext.Provider>
);

export const useCarrito = () => useContext(CarritoContext);
