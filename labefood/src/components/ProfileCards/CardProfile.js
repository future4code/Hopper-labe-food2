import useRequestedData from "../../hooks/useRequestData";
import { Cpf, Email, Img1, Name } from "./Styled";
import Spinner from "../Spinner/Spinner";
import Edit from "../../assets/edit.svg";
import CardAddress from "./CardAddress";
import CardHistory from "./CardHistory";
import { useNavigate } from "react-router-dom";

const CardProfile = () => {
  const { data, isLoading } = useRequestedData(`/profile`);
  const navigate = useNavigate();
  const goToEditProfile = (navigate) => {
    navigate("/editProfile");
  };
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
            <Img1
              src={Edit}
              alt="icone"
              onClick={() => goToEditProfile(navigate)}
            />
            <CardAddress />
            <CardHistory />
          </div>
        )
      )}
    </>
  );
};

export default CardProfile;
