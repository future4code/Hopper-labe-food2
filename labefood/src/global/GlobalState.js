import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    //Estados gerais da aplicação
    const [cart, setCart] = useState([])
    const [infoRestaurant, setInfoRestaurant] = useState({})
    const [subtotal, setSubtotal] = useState(0)

    //Funções para todas as requisições
    //Em caso de algum dado retornado elas devem ser
    //armazenadas nos estados acima
    const getExemplo = () => {
        // ...axios.get(...)
    }

    //Adicionar Produto ao Carrinho e Atualiza Informações do Restaurante
    const addProduct = (product, restaurant, quantidade) => {
        const newProduct = { ...product, quantity: `${quantidade}` }
        const newCart = [...cart, newProduct]
        setCart(newCart)

        const newInfoRestaurant = restaurant
        setInfoRestaurant(newInfoRestaurant)

        const newSubtotal = subtotal + product.price * quantidade
        setSubtotal(newSubtotal)
    }

    //Remover Produto do Carrinho
    const rmProduct = (product) => {
        const newCart = cart.filter((item) => {
            return item.id !== product.id
        })
        setCart(newCart)

        const newSubtotal = subtotal - (product.price*product.quantity)
        setSubtotal(newSubtotal)
    }

    //Informações
    const states = { cart, infoRestaurant, subtotal }
    const setters = { setCart, setInfoRestaurant, setSubtotal }
    const requests = { getExemplo }
    const functions = { addProduct, rmProduct }

    //Provedor dos estados que irão receber como filhos
    //os componentes que receberão as informações
    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, functions }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState