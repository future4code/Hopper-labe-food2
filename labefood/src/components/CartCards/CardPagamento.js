
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from "@mui/material"
import { primaryColor } from "../../constants/colors"
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