import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Spinner from "../../components/Spinner/Spinner"
import {
  Container,
  Restaurant,
  Logo,
  Details,
  PriceTime,
  ContainerProducts,
  Title,
  Image,
  Products,
  Texts,
  Item
} from "./Styles"
import CardShopping from "../../components/DetailsCards/CardShopping";

const DetailsPage = (props) => {
  const { id } = useParams()
  const { data, isLoading } = useGetData(`/restaurants/${id}`)

  const typeProducts = data.restaurant && data.restaurant.products.map(food => {
    return food
  }).reduce((acc, food) => {
    if (!acc[food.category]) {
      acc[food.category] = []
    }
    acc[food.category].push(food)
    return acc
  }, [])

  return (
    <Container>
      <Header subTitle={"Restaurante"} />
      {isLoading
        ? (<Spinner />)
        : data.restaurant &&
        (
          <>
            <Restaurant key={id}>
              <Logo>
                <img src={data.restaurant.logoUrl} alt="" />
              </Logo>
              <Details>
                <h3>{data.restaurant.name}</h3>
                <p>{data.restaurant.category}</p>
                <PriceTime>
                  <p>{data.restaurant.deliveryTime - 10} - {data.restaurant.deliveryTime} min</p>
                  <p>Frete R${data.restaurant.shipping},00</p>
                </PriceTime>
                <p>{data.restaurant.address}</p>
              </Details>
            </Restaurant>
            {typeProducts && Object.entries(typeProducts).map((type, i) => (
              <ContainerProducts key={i}>
                <Title>{type[0]}</Title>
                {type[1].map(products => (
                  <Products key={products.id}>
                    <Image>
                      <img src={products.photoUrl} alt={`Imagem ilustrativa do ${products.name}`} />
                    </Image>
                    <Texts>
                      <Item>
                        <p>{products.name}</p>
                      </Item>
                      <p>{products.description}</p>
                      <CardShopping 
                        products={products}
                        restaurant={data.restaurant}
                      />
                    </Texts>
                  </Products>
                ))}
              </ContainerProducts>
            ))}
          </>
        )
      }
      <Footer />
    </Container >
  )
}

export default DetailsPage