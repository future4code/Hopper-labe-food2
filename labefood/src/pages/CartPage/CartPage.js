import { Container } from "./Styles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardAddress from "../../components/CartCards/CardAddress"
import CardOrders from "../../components/CartCards/CardOrders";
import CardFrete from "../../components/CartCards/CardFrete";
import CardPagamento from "../../components/CartCards/CardPagamento";
import { ContainerRestaurant } from "../../components/CartCards/Styled";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";
import CardRestaurant from "../../components/CartCards/CardRestaurant";

const CartPage = () => {
  const {states,setters,requests,functions} = useContext(GlobalStateContext)
  const ordersRender = states.cart.map((item) => {
    return (
      <CardOrders
        products={item}
      />
    )
  })
    return (
      <Container>
        <Header subTitle={'Meu carrinho'}/>
        <CardAddress/>
        {states.cart.length === 0 ?
          <div></div>:
          <CardRestaurant/>
        }
        {states.cart.length === 0 ?
          <ContainerRestaurant>Carrinho Vazio</ContainerRestaurant>:
          ordersRender
        }
        <CardFrete/>
        <CardPagamento/>
        <Footer />
      </Container>
    )
  }
  
  export default CartPage