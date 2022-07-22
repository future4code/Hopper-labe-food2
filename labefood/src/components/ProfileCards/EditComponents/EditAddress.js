import { Button, TextField } from "@mui/material";
import { useForm } from "../../../hooks/useForm";
import api from "../../../config/api"
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { useEffect } from "react";
import useRequestedData from "../../../hooks/useRequestData";

const EditAddress = (props) => {
  useProtectedPage()
  const { data } = useRequestedData(`/profile/address`, {});
  const { form, onChange, setForm } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  });

  useEffect(() => {
    const { address } = data
    setForm({ street: address?.street, number: address?.number, neighbourhood: address?.neighbourhood, city: address?.city, state: address?.state, complement: address?.complement })
  }, [data])

  const Edit = () => {
    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement
    }
    api.put("/address", body).then((res) => {

      console.log(res.data)
    }).catch((err) => {
      console.log(err.data)
    })
  }

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <button onClick={props.voltar}>Voltar</button>

      <form onSubmit={submit}>
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
          placeholder=""
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
          placeholder=""
          type=""
          fullWidth
          margin={"normal"}
          id="outlined"
          label="Complemento"
        />
        <TextField
          name={"neighbourhood"}
          value={form.neighbourhood || ""}
          onChange={onChange}
          placeholder=""
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
          placeholder=""
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
          placeholder=""
          fullWidth
          margin={"normal"}
          id="outlined-required"
          label="Estado"
          required
        />
        <Button
          onClick={Edit}
          fullWidth
          variant="contained"
          color="primary"
        >
          Salvar
        </Button>
      </form>


    </>
  );
};

export default EditAddress;
