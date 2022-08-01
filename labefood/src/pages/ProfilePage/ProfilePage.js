import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CardProfile from "../../components/ProfileCards/CardProfile";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Container } from "./Styles";

const ProfilePage = () => {
  useProtectedPage()
  return (
    <Container>
      <Header subTitle={"Meu perfil"} />
      <CardProfile />
      <Footer current={'Profile'}/>
    </Container>
  );
};

export default ProfilePage;
