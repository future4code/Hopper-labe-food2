import { Container, Order, IMG, OrderInfo, Btns, Icons } from "./Styles"
import { useNavigate } from "react-router-dom";
import { goToFeed, goToCart, goToProfile} from "../../router/coordinator";
import House from '../../assets/Housesvg'
import Shopping_Cart from '../../assets/Shopping_Cartsvg'
import Avatar from '../../assets/Avatarsvg'
import { BASE_URL } from "../../constants/base_URL";
import useRequestData from "../../hooks/useRequestData"
import Clock from "../../assets/clock.svg"

const Footer = ({current}) => {

  const navigate = useNavigate()

  const { data } = useRequestData(BASE_URL + "/active-order", [])
  
  return (
    <Container>
      {data && data !== null
      ? <Order disp={'flex'}>
          <IMG>
            <img src={Clock} alt="Ícone de timer" />
          </IMG>
          <OrderInfo>
            <p>Pedido em andamento</p>
            <p>{data.order && data.order.restaurantName}</p>
            <p>SUBTOTAL: R${data.order && (data.order.totalPrice).toFixed(2).replace(".", ",")}</p>
          </OrderInfo>
        </Order> 
      : <Order disp={'none'} ></Order> }
      <Btns>
        <Icons onClick={() => goToFeed(navigate)} idx={current === 'Feed' && 1}><House/></Icons>
        <Icons onClick={() => goToCart(navigate)} idx={current === 'Cart' && 2}><Shopping_Cart/></Icons>
        <Icons onClick={() => goToProfile(navigate)} idx={current === 'Profile' && 3}><Avatar/></Icons>
      </Btns>
    </Container>
  )
}

export default Footer
