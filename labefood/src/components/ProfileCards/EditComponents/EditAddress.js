import { Button, TextField } from "@mui/material";
import { useForm } from "../../../hooks/useForm";
import api from "../../../config/api";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { useEffect } from "react";
import useRequestedData from "../../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { goToProfile } from "../../../router/coordinator";
import { ButtonContainer, ContainerEdit, InputsContainer } from "../Styled";
import Header from "../../Header/Header";
import Back from "../../../assets/back.svg";

const EditAddress = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const { data } = useRequestedData(`/profile/address`, {});
  const { form, onChange, setForm } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  useEffect(() => {
    const { address } = data;
    setForm({
      street: address?.street,
      number: address?.number,
      neighbourhood: address?.neighbourhood,
      city: address?.city,
      state: address?.state,
      complement: address?.complement,
    });
  }, [data]);

  const Edit = () => {
    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };
    api
      .put("/address", body)
      .then((res) => {
        setForm(res.data.user);
        goToProfile(navigate);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <ContainerEdit>
      <Header subTitle={"Endereço"} />
      <img src={Back} alt="voltar" onClick={() => goToProfile(navigate)}></img>
      <form onSubmit={submit}>
        <InputsContainer>
          <TextField
            name={"street"}
            value={form.street || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Logradouro"
            required
          />
          <TextField
            name={"number"}
            value={form.number || ""}
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
            value={form.complement || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined"
            label="Complemento"
          />
          <TextField
            name={"neighbourhood"}
            value={form.neighbourhood || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Bairro"
            required
          />
          <TextField
            name={"city"}
            value={form.city || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Cidade"
            required
          />
          <TextField
            name={"state"}
            value={form.state || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Estado"
            required
          />
        </InputsContainer>
        <ButtonContainer>
          <Button onClick={Edit} fullWidth variant="contained" color="primary">
            Salvar
          </Button>
        </ButtonContainer>
      </form>
    </ContainerEdit>
  );
};

export default EditAddress;
