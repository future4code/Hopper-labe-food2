
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from "@mui/material"
import axios from "axios"
import { useContext, useState } from "react"
import { BASE_URL } from "../../constants/base_URL"
import GlobalStateContext from "../../global/GlobalStateContext"
import { ContainerSubtotal, Subtotal } from "./Styled"

const CardPagamento = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { states, setters } = useContext(GlobalStateContext)
    const [ payment, setPayment ] = useState('money')
    
    let products = states.cart.map((product) => {
        return {
            id: product.id,
            quantity: product.quantity
        }
    })
    const body = {
        products,
        paymentMethod: payment
    }
    const id = states.infoRestaurant.id

    const enviarPedido = (param) => {
        setIsLoading(true)
        const headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.post(`${BASE_URL + param}`, body , headers)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
                setters.setCart([])
            }).catch((err) => {
                alert(err.response.data.message)
            }).finally(() => {
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            })
    }

    return (
        <div>
            <ContainerSubtotal>
                <p>SUBTOTAL:</p>
                <Subtotal>
                    R$ {states.infoRestaurant.shipping === undefined ? Number(0).toFixed(2).replace('.', ',') : (states.subtotal + states.infoRestaurant.shipping).toFixed(2).replace('.', ',')}
                </Subtotal>
            </ContainerSubtotal>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Forma de Pagamento</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="dinheiro"
                    name="radio-buttons-group"
                >
                    <FormControlLabel onClick={() => setPayment('money')} value="dinheiro" control={<Radio />} label="Dinheiro" />
                    <FormControlLabel onClick={() => setPayment('creditcard')} value="cartao" control={<Radio />} label="Cartão de Crédito" />
                </RadioGroup>
            </FormControl>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => enviarPedido(`/restaurants/${id}/order`, body)}
            > Confirmar
            </Button>
        </div>
    )
}

export default CardPagamento