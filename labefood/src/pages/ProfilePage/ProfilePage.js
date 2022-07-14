import { useNavigate } from "react-router-dom";
import {  goToFeed,  goToCart, goToProfile} from "../../router/coordinator";


const ProfilePage = () => {
    const navigate = useNavigate();
    return (
      <div>
        ProfilePage
        <button onClick={() => goToFeed(navigate)}>Feed</button>
        <button onClick={() => goToCart(navigate /* id */)}>Carrinho</button>
        <button onClick={() => goToProfile(navigate)}>Perfil</button>
        
        </div>
    )
  }
  
  export default ProfilePage