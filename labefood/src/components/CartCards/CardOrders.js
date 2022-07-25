import {ContainerRestaurant, GrayFont, GreenFont,} from "./Styled"

const CardOrders = () => {
    return(
    <div>
        <ContainerRestaurant>
            <GreenFont>Nome do Restaurante</GreenFont>
            <GrayFont>Localização</GrayFont>
            <GrayFont>Tempo de Entrega</GrayFont>
        </ContainerRestaurant>
        <p>Pedidos</p>
    </div>
    )
}

export default CardOrders