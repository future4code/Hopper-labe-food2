import { useNavigate } from "react-router-dom"
import { goToAddAdress } from "../../router/coordinator"
import { useForm } from "../../hooks/useForm"
import { BASE_URL } from "../../constants/constants"
import axios from "axios"
import { Container, InputsContainer } from "./Styles";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


const SignUpPage = () => {
  const navigate = useNavigate()

  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    rep_password: "",
  });


  const SubmitSignUp = () => {
    const url = `${BASE_URL}/signup`;
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password
    }

    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res)
        goToAddAdress(navigate);

      })
      .catch((err) => {
        alert("Erro ao cadastrar usuário.")
        console.log(err)
      })


  }
  const Submit = (event) => {
    event.preventDefault();
    cleanFields();
  }


  return (
    <Container>
      {/* FALTA FAZER A PARTE DE VOLTAR COM UNDERLINE */}
      <h1>Future</h1>
      <h1>Eats</h1>
      <p>Cadastrar</p>


      <form onSubmit={SubmitSignUp} >
        <InputsContainer>

          <TextField
            name={"Nome"}
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
            name={"E-mail"}
            value={form.email}
            onChange={onChange}
            placeholder="email@email.com"
            type="email"
            fullWidth
            id="outlined-required"
            label="E-mail"
            required
          />

          <TextField
            name={"CPF"}
            value={form.cpf}
            onChange={onChange}
            placeholder="000.000.000-00"
            type="number"
            fullWidth
            id="outlined-required"
            label="CPF"
            required
          />

          <TextField
            name={"Senha"}
            value={form.password}
            onChange={onChange}
            placeholder="Mínimo 6 caracteres."
            type="password"
            fullWidth
            id="outlined-required"
            label="Senha"
            required
          />

          <TextField
            name={"Confirmar"}
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
      </form>




      <Button
        onClick={SubmitSignUp}
        fullWidth
        variant="contained"
        color="primary"
      >
        Criar
      </Button>


    </Container>
  )
}

export default SignUpPage