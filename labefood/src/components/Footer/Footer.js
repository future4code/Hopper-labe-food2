import { Btns, Icons } from "./Styles"
import { useNavigate } from "react-router-dom";
import { goToFeed, goToCart, goToProfile} from "../../router/coordinator";
import House from '../../assets/Housesvg'
import Shopping_cart from '../../assets/Shopping_Cartsvg'
import Avatar from '../../assets/Avatarsvg'

const Footer = ({current}) => {

  const navigate = useNavigate()

  return (
    <Btns>
      <Icons onClick={() => goToFeed(navigate)} idx={current === 'Feed' && 1}><House/></Icons>
      <Icons onClick={() => goToCart(navigate)} idx={current === 'Cart' && 2}><Shopping_cart/></Icons>
      <Icons onClick={() => goToProfile(navigate)} idx={current === 'Profile' && 3}><Avatar/></Icons>
    </Btns>
  )
}

export default Footer
