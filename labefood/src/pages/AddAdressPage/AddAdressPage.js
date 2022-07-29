import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { useForm } from "../../hooks/useForm";
import { goToFeed, goToLogin, goToSignUp } from "../../router/coordinator";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Container, InputsContainer } from "./Styles";






const AddAdressPage = () => {

  const { form, onChange, cleanFields } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  })
  const navigate = useNavigate();



  const SubmitAddAdress = () => {
    const url = `${BASE_URL}/address`

    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement
    };

    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    axios
      .put(url, body, headers)
      .then((res) => {
        alert("Endereço cadastrado com sucesso.")
        goToFeed(navigate);
      })
      .catch((err) => {
        alert("Não foi possível cadastrar o endereço.")
        console.log(err.message)
      })

  }

  const submit = (event) => {
    event.preventDefault();
    cleanFields();
  }

  return (
    <Container>
      {/* FALTA FAZER A PARTE DE RETURN */}
      <p>Meu endereço</p>

      <form onSubmit={submit}>

        <InputsContainer>
        
        <TextField
          name={"street"}
          value={form.street}
          onChange={onChange}
          fullWidth
          margin={"normal"}
          id="outlined-required"
          label="Logradouro"
          required
        />
        <TextField
          name={"number"}
          value={form.number}
          onChange={onChange}
          type="number"
          fullWidth
          margin={"normal"}
          id="outlined-required"
          label="Número"
          required
        />
        <TextField
          name={"complement"}
          value={form.complement}
          onChange={onChange}
          fullWidth
          margin={"normal"}
          id="outlined"
          label="Complemento"
        />
        <TextField
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          fullWidth
          margin={"normal"}
          id="outlined-required"
          label="Bairro"
          required
        />
        <TextField
          name={"city"}
          value={form.city}
          onChange={onChange}
          fullWidth
          margin={"normal"}
          id="outlined-required"
          label="Cidade"
          required
        />
        <TextField
          name={"state"}
          value={form.state}
          onChange={onChange}
          fullWidth
          margin={"normal"}
          id="outlined-required"
          label="Estado"
          required
        />
        </InputsContainer>
        

        <Button
          onClick={SubmitAddAdress}
          fullWidth
          variant="contained"
          color="primary"
        >
          Salvar
        </Button>

      </form>


    </Container>
  );
};

export default AddAdressPage;
