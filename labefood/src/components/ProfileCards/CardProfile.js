import useRequestedData from "../../hooks/useRequestData";
import { Cpf, Email, Img1, Name } from "./Styled";
import Spinner from "../Spinner/Spinner";
import Edit from "../../assets/edit.svg"
import EditAddress from "./EditComponents/EditAddress";


const CardProfile = () => {
  const { data, isLoading } = useRequestedData(`/profile`);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        data &&
        data.user && (
          <div>
            <Name>{data.user.name}</Name>
            <Email>{data.user.email}</Email>
            <Cpf>{data.user.cpf}</Cpf>
            <Img1 src={Edit} alt="icone" />
          </div>
        )
      )}
    </>
  );
};

export default CardProfile;
