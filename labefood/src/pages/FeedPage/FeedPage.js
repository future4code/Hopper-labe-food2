import { useNavigate } from "react-router-dom";
import { goToDetails, goToFeed,  goToCart, goToProfile} from "../../router/coordinator";

const FeedPage = () => {
    const navigate = useNavigate();
    return (
      <div>
        FeedPage
        <button onClick={() => goToDetails(navigate/* id */)}>Detalhe restaurante</button>
        <button onClick={() => goToFeed(navigate)}>Feed</button>
        <button onClick={() => goToCart(navigate /* id */)}>Carrinho</button>
        <button onClick={() => goToProfile(navigate)}>Perfil</button>
        </div>
    )
  }
  
  export default FeedPage