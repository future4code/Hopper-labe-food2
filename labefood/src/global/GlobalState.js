import React, {useState} from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    //Estados gerais da aplicação
    const [exemplo, setExemplo] = useState(undefined)

    //Funções para todas as requisições
    //Em caso de algum dado retornado elas devem ser
    //armazenadas nos estados acima
    const getExemplo = () => {
        // ...axios.get(...)
    }

    //Informações
    const states = {exemplo}
    const setters = {setExemplo}
    const requests = {getExemplo}

    //Provedor dos estados que irão receber como filhos
    //os componentes que receberão as informações
    return(
        <GlobalStateContext.Provider value={{states,setters,requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState