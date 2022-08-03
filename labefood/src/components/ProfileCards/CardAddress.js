import useRequestedData from "../../hooks/useRequestData";
import { ContainerAddress, Endereco, Img2, TitleAddress } from "./Styled";
import Edit from "../../assets/edit.svg";
import { useNavigate } from "react-router-dom"


const CardAddress = () => {
  const { data, isLoading } = useRequestedData(`/profile/address`);
  const navigate = useNavigate()

  const goToEditAddress = (navigate) => {
    navigate("/editAddress")
  }

  return (
    <ContainerAddress>
      <TitleAddress>Endereço Cadastrado</TitleAddress>
      {isLoading ? <p>Carregando..</p> : (data && data.address && (
        <div>
          <Endereco>
            {data.address.street}, {data.address.number} -{" "}
            {data.address.neighbourhood}
          </Endereco>
          <Img2 src={Edit} alt="icone" onClick={() => goToEditAddress(navigate)} />
        </div>
      ))}
    </ContainerAddress>
  );
};

export default CardAddress;
