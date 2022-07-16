import { Container, Search } from "./Styles"
import search from '../../assets/search.svg'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FeedCards from "../../components/FeedCards/FeedCards";


const FeedPage = () => {
    return (
      <Container>
        <Header subTitle={'FutureEats'}/>
        <Search>
          <button>
            <img src={search} alt="Ícone de busca" />
          </button>
          <input type="text" placeholder="Restaurante"/>
        </Search>
        <FeedCards />
        <Footer />
      </Container>
    )
  }
  
  export default FeedPage