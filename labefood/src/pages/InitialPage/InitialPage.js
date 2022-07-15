import { Container } from "./Styles"
import {goToLogin} from "../../router/coordinator"
import { useNavigate } from "react-router-dom";

const InitialPage = () => {

  const navigate = useNavigate()
  return (
    <Container>
      <h1>Future</h1>
      <h1>Eats</h1>
      {setTimeout(() => {
        goToLogin(navigate)
      }, 2000)}
    </Container>
  )
}

export default InitialPage