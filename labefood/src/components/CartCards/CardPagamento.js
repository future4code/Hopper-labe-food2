
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import {ContainerSubtotal, Subtotal} from "./Styled"

const CardPagamento = () => {
    return(
        <div>
        <ContainerSubtotal>
            <p>SUBTOTAL:</p>
            <Subtotal>R$ 00,00</Subtotal>
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
        </div>
    )
}

export default CardPagamento