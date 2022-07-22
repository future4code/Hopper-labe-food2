import useRequestedData from "../../hooks/useRequestData";
import { ContainerAddress, Endereco, Img2, TitleAddress } from "./Styled";
import Edit from "../../assets/edit.svg";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";

const CardAddress = () => {
  const { data } = useRequestedData(`/profile/address`);
  const navigate = useNavigate()

const goToEditAddress = (navigate)=> {
  navigate("/editAddress")
}

/* useEffect(() => {
  localStorage.setItem("address", JSON.stringify(data && data.address && data.address))

}, [data]) */

  return (
    <ContainerAddress>
      <TitleAddress>Endereço Cadastrado</TitleAddress>
      {data && data.address && (
        <div>
          <Endereco>
            {data.address.street}, {data.address.number} -{" "}
            {data.address.neighbourhood}
          </Endereco>
          <Img2 src={Edit} alt="icone" onClick={() => goToEditAddress(navigate)}/>
        </div>
      )}
    </ContainerAddress>
  );
};

export default CardAddress;
