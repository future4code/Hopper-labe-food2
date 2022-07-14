import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../router/coordinator";
const AddAdressPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      AddAdressPage
      <button onClick={() => goToLogin(navigate)}>Salvar</button>
    </div>
  );
};

export default AddAdressPage;
