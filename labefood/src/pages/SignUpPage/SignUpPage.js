import { useNavigate } from "react-router-dom"
import { goToAddAdress } from "../../router/coordinator"
import { useForm } from "../../hooks/useForm"
import { BASE_URL } from "../../constants/constants"
import axios from "axios"
import { ButtonContainer, Container, InputsContainer } from "./Styles";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


const SignUpPage = () => {
  const navigate = useNavigate()

  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    rep_password: ""
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

    const submit = (event) => {
      event.preventDefault();
      cleanFields();
    }






  }


  return (
    <Container>
      {/* FALTA FAZER A PARTE DE VOLTAR COM UNDERLINE */}
      <h1>Future</h1>
      <h1>Eats</h1>
      <p>Cadastrar</p>


      {/* <form onSubmit={submit}>
      <TextField
            name={"nome"}
            value={form.name}
            onChange={onChange}
            placeholder="José da Silva"
            type="text"
            fullWidth
            id="outlined-required"
            label="Nome"
            required
          />

      </form>




      <Button
        onClick={SubmitSignUp}
        fullWidth
        variant="contained"
        color="primary"
      >
        Criar
      </Button> */}


    </Container>
  )
}

export default SignUpPage