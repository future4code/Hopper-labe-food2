import { Container } from "./Styles"
import {goToLogin} from "../../router/coordinator"
import { useNavigate } from "react-router-dom";

const InitialPage = () => {

  const navigate = useNavigate()
  return (
    <Container>
      <h1>Future</h1>
      <h1>Eats</h1>
      <button onClick={() => goToLogin(navigate)}>Login Page</button>
    </Container>
  )
}

export default InitialPage