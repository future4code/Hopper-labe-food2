import { useNavigate } from "react-router-dom";
import { goToAddAdress, goToFeed, goToSignUp } from "../../router/coordinator";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/constants";
import axios from "axios";
import { ButtonContainer, Container, InputsContainer } from "./Styles";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const LoginPage = () => {
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const submitLogin = () => {
    const url = `${BASE_URL}/login`;
    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        const hasAddress = res.data.user.hasAddress;
        !hasAddress ? goToAddAdress(navigate) : goToFeed(navigate);
      })
      .catch((err) => {
        alert("Usuário não cadastrado.");
        console.log(err.message);
      });
  };

  const submit = (event) => {
    event.preventDefault();
    cleanFields();
  };

  return (
    <Container>
      <h1>Future</h1>
      <h1>Eats</h1>
      <p>Entrar</p>
      <form onSubmit={submit}>
        <InputsContainer>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="email@email.com"
            type="email"
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="E-mail"
            required
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Mínimo 6 caracteres"
            type="password"
            margin={"normal"}
            fullWidth
            id="outlined-required"
            label="Senha"
            pattern={"^.{6,}"}
            required
          />
        </InputsContainer>
        <ButtonContainer>
          <Button
            onClick={submitLogin}
            fullWidth
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
          <Button
            onClick={() => goToSignUp(navigate)}
            size="small"
            color={"inherit"}
          >
            Não possui cadastro? Clique aqui.
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default LoginPage;
