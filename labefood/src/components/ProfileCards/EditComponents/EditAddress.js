import { Button, TextField } from "@mui/material";
import { useForm } from "../../../hooks/useForm";
import api from "../../../config/api"
import useRequestedData from "../../../hooks/useRequestData";
import { useProtectedPage } from "../../../hooks/useProtectedPage";

const EditAddress = (props) => {
/* const address = localStorage.getItem(JSON.parse("address")) */
/* Unexpected token a in JSON at position 0 */
/* console.log(address) */
  const {form, onChange} = useForm({
    street: "",
    number: "",
    neighbourhood:"",
    city:"",
    state: "",
    complement: "",
  });
  useProtectedPage()



  const Edit = () => {
    const body = {
    street: form.street,
    number: form.number,
    neighbourhood: form.neighbourhood,
    city: form.city,
    state: form.state,
    complement: form.complement
    }
    api.put("/address", body).then((res)=> {
       
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
              value={form.complement}
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
            value={form.neighbourhood}
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
            value={form.city}
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
            value={form.state}
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
