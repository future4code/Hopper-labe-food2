import {ContainerRestaurant, GrayFont, GreenFont,} from "./Styled"

const CardRestaurant = () => {
    return(
    <ContainerRestaurant>
        <GreenFont>Nome do Restaurante</GreenFont>
        <GrayFont>Localização</GrayFont>
        <GrayFont>Tempo de Entrega</GrayFont>
    </ContainerRestaurant>
    )
}

export default CardRestaurant