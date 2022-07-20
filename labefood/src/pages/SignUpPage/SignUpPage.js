import { useNavigate } from "react-router-dom"
import {goToAddAdress} from "../../router/coordinator"
import { useForm } from "../../hooks/useForm"
import { BASE_URL } from "../../constants/constants"
import axios from "axios"

const SignUpPage = () => {
    const navigate = useNavigate()

    const {form, onChange, cleanFields} = useForm({
      name: "",
      email: "",
      cpf: "",
      password: "",
      rep_password: ""
    });


    const SubmitSignUp = () =>{
      const url = `${BASE_URL}/signup`;
      const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password
      }

      axios
      .post(url, body)
      .then((res) =>{
        console.log(res)
      })
      .catch((err) =>{
        alert("Erro ao cadastrar usuário.")
        console.log(err)
      })

      const submit = (event) =>{
        event.preventDefault();
        cleanFields();
      }






    }


    return (
      <div>
        SignUpPage
        <button onClick={() => goToAddAdress(navigate)}>Confirmar</button>
        </div>
    )
  }
  
  export default SignUpPage