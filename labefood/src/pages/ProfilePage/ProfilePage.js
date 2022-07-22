import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CardAddress from "../../components/ProfileCards/CardAddress";
import CardHistory from "../../components/ProfileCards/CardHistory";
import CardProfile from "../../components/ProfileCards/CardProfile";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Container } from "./Styles";

const ProfilePage = () => {
  useProtectedPage()
  return (
    <Container>
      <Header subTitle={"Meu perfil"} />
      <CardProfile />
      <CardAddress/>
      <CardHistory/>
      <Footer />
    </Container>
  );
};

export default ProfilePage;
