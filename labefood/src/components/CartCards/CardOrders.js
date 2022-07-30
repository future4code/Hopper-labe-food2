import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import {
    Products,
    Image,
    Texts,
    Item,
    Shopping
} from "./Styled"

const CardOrders = (props) => {
    const { states, setters, requests, functions } = useContext(GlobalStateContext)
    return (
        <div>
            <Products key={props.products.id}>
                <Image>
                    <img src={props.products.photoUrl} alt={`Imagem ilustrativa do ${props.products.name}`} />
                </Image>
                <Texts>
                    <Item>
                        <p>{props.products.name}</p>
                        <button>{props.products.quantity}</button>
                    </Item>
                    <p>{props.products.description}</p>
                    <Shopping>
                        <p>R$ {props.products.price.toFixed(2).replace('.', ',')}</p>
                        <button onClick={() => functions.rmProduct(props.products)}>Remover</button>
                    </Shopping>
                </Texts>
            </Products>
        </div>
    )
}

export default CardOrders