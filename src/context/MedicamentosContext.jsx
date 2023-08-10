import { createContext, useState } from "react";

export const MedicamentosContext = createContext()

export const MedicamentosContextProvider = (children) => {

  const [listaMedicamentos, setListaMedicamentos] = useState([])

  return(
    <MedicamentosContext.Provider value={{listaMedicamentos, setListaMedicamentos}}>
      {children}
    </MedicamentosContext.Provider>
  )
}