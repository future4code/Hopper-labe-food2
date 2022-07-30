
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from "@mui/material"
import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import {ContainerSubtotal, Subtotal} from "./Styled"

const CardPagamento = () => {
    const { states, setters, requests, functions } = useContext(GlobalStateContext)
    return(
        <div>
        <ContainerSubtotal>
            <p>SUBTOTAL:</p>
            <Subtotal>R$ {states.subtotal + states.infoRestaurant.shipping},00</Subtotal>
        </ContainerSubtotal>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Forma de Pagamento</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="dinheiro"
                name="radio-buttons-group"
            >
            <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
            <FormControlLabel value="cartao" control={<Radio />} label="Cartão de Crédito" />
            </RadioGroup>
        </FormControl>
        <Button
            fullWidth
            variant="contained"
            color="primary" 
            > Confirmar
        </Button>
        </div>
    )
}

export default CardPagamento