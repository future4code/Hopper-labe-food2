import useRequestedData from "../../hooks/useRequestData";
import { GrayFont, ContainerAddress, Endereco } from "./Styled";
import { useEffect } from "react";

const CardAddress = () => {
  const { data } = useRequestedData(`/profile/address`);

  useEffect(() => {
    localStorage.setItem("address", JSON.stringify(data && data.address && data.address))
  }, [data])

  return (
    <ContainerAddress>
        <GrayFont>Endereço de Entrega</GrayFont>
      {data && data.address && (
        <div>
          <Endereco>
            {data.address.street}, {data.address.number} -{" "}
            {data.address.neighbourhood}
          </Endereco>
        </div>
      )}
    </ContainerAddress>
  );
};

export default CardAddress;