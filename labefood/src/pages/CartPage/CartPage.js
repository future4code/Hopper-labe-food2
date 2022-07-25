import { Container } from "./Styles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardAddress from "../../components/CartCards/CardAddress"
import CardOrders from "../../components/CartCards/CardOrders";
import CardRestaurant from "../../components/CartCards/CardRestaurant";
import CardFrete from "../../components/CartCards/CardFrete";
import CardPagamento from "../../components/CartCards/CardPagamento";
import { ContainerRestaurant } from "../../components/CartCards/Styled";

const CartPage = () => {
    return (
      <Container>
        <Header subTitle={'Meu carrinho'}/>
        <CardAddress/>
        {true ? 
          <ContainerRestaurant>Carrinho Vazio</ContainerRestaurant>:
          <CardOrders/>
        }
        <CardFrete/>
        <CardPagamento/>
        <Footer />
      </Container>
    )
  }
  
  export default CartPage