import { useNavigate } from "react-router-dom";
import { goToFeed,  goToCart, goToProfile} from "../../router/coordinator";


const CartPage = () => {
    const navigate = useNavigate();
    return (
      <div>
        CartPage
        <button onClick={() => goToFeed(navigate)}>Confirmar</button>
        <button onClick={() => goToFeed(navigate)}>Feed</button>
        <button onClick={() => goToCart(navigate /* id */)}>Carrinho</button>
        <button onClick={() => goToProfile(navigate)}>Perfil</button>
         
        </div>
    )
  }
  
  export default CartPage