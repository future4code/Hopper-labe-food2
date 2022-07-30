import { useNavigate } from "react-router-dom"
import { goToAddAdress } from "../../router/coordinator"
import { goToLogin } from "../../router/coordinator"
import { useForm } from "../../hooks/useForm"
import { BASE_URL } from "../../constants/constants"
import axios from "axios"
import { Container, HeaderBack, InputsContainer } from "./Styles";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Return from "../../assets/back.svg"


const SignUpPage = () => {

  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    rep_password: "",
  });
  const navigate = useNavigate()

  const ClickReturn = () => {
    goToLogin(navigate)
  }

  const ClickAlertPassword = () =>{
    alert("As senhas digitadas não conferem.")
  }


  const SubmitSignUp = () => {
    const url = `${BASE_URL}/signup`;

    const body = {
      "name": form.name,
      "email": form.email,
      "cpf": form.cpf,
      "password": form.password,
    };

    axios
      .post(url, body)
      .then((res) => {
        alert("Cadastro realizado com sucesso.")
        goToAddAdress(navigate);

      })
      .catch((err) => {
        alert("Erro ao cadastrar usuário.")
        console.log(err.message)
      })


  }
  const submit = (event) => {
    event.preventDefault();
    cleanFields();
  }


  return (
    <Container>
      <HeaderBack>
        <img onClick={ClickReturn} src={Return} alt="back"></img>
      </HeaderBack>
      <h1>Future</h1>
      <h1>Eats</h1>
      <p>Cadastrar</p>


      <form onSubmit={submit} >
        <InputsContainer>

          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome e Sobrenome"
            type="text"
            fullWidth
            id="outlined-required"
            label="Nome"
            required
          />

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
            name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            placeholder="000.000.000-00"
            type="number"
            fullWidth
            id="outlined-required"
            label="CPF"
            required
            pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"
          />

          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Mínimo 6 caracteres."
            type="password"
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Senha"
            required
            Pattern="^.{6,10}$"
          />

          <TextField
            name={"rep_password"}
            value={form.rep_password}
            onChange={onChange}
            placeholder="Confirme a senha anterior."
            type="password"
            fullWidth
            id="outlined-required"
            label="Confirmar"
            required
          />
        </InputsContainer>

        {form.rep_password === form.password ?
          (<Button
            onClick={SubmitSignUp}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Criar
          </Button>) : 
           (<Button
              onClick={ClickAlertPassword}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Criar
            </Button>) }


      </form>
    </Container>
  )
}

export default SignUpPage