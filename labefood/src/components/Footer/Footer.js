import { Btns } from "./Styles"
import { useNavigate } from "react-router-dom";
import { goToFeed,  goToCart, goToProfile} from "../../router/coordinator";
import house from '../../assets/house.svg'
import shopping_cart from '../../assets/shopping_cart.svg'
import avatar from '../../assets/avatar.png'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <Btns>
      <img src={house} alt='' onClick={() => goToFeed(navigate)} />
      <img src={shopping_cart} alt='' onClick={() => goToCart(navigate)} />
      <img src={avatar} alt='' onClick={() => goToProfile(navigate)} />
    </Btns>
  )
}

export default Footer
