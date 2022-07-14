import { useNavigate } from "react-router-dom";
import { goToCart} from "../../router/coordinator";


const DetailsPage = () => {
    const navigate = useNavigate();
    return (
      <div>
        DetailsPage
        <button onClick={() => goToCart(navigate /* id */)}>Carrinho</button>
        </div>
    )
  }
  
  export default DetailsPage