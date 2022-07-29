import { ContainerRestaurant, GrayFont, GreenFont } from "./Styled";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

const CardRestaurant = () => {
    const {states,setters,requests,functions} = useContext(GlobalStateContext)
    
    return(
        <ContainerRestaurant>
            <GreenFont>{states.infoRestaurant.name}</GreenFont>
            <GrayFont>{states.infoRestaurant.address}</GrayFont>
            <GrayFont>{states.infoRestaurant.deliveryTime - 10} - {states.infoRestaurant.deliveryTime} min</GrayFont>
        </ContainerRestaurant>
    )
}

export default CardRestaurant