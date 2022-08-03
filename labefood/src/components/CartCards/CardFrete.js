import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { ContainerFrete } from "./Styled"

const CardFrete = () => {
    const {states} = useContext(GlobalStateContext)
    return(
        <ContainerFrete>Frete: R$ {states.infoRestaurant.shipping},00</ContainerFrete>
    )
}

export default CardFrete