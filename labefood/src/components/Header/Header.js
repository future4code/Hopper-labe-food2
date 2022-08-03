import { useNavigate } from "react-router-dom"
import { Container } from "./Styles"
import { goToLogin } from "../../router/coordinator"

const Header = ({ subTitle }) => {

  const navigate = useNavigate()

  const Logout = () => {
    localStorage.clear()
    goToLogin(navigate)
  }

  return (
    <Container>
      <h2>{subTitle}</h2>
      <p onClick={Logout}>Logout</p>
    </Container>
  )
}

export default Header
