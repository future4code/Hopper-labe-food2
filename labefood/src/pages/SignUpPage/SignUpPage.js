import { useNavigate } from "react-router-dom"
import {goToAddAdress} from "../../router/coordinator"
const SignUpPage = () => {
    const navigate = useNavigate()
    return (
      <div>
        SignUpPage
        <button onClick={() => goToAddAdress(navigate)}>Confirmar</button>
        </div>
    )
  }
  
  export default SignUpPage