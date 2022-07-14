import {useNavigate} from "react-router-dom"
import {goToFeed, goToSignUp} from "../../router/coordinator"
const LoginPage = () => {
    const navigate = useNavigate()
    
    return (
      <div>
        LoginPage
        <button onClick={() => goToFeed(navigate)}>Confirmar</button>
        <button onClick={() => goToSignUp(navigate)}>Sign up</button>
        </div>
    )
  }
  
  export default LoginPage