import useGetData from "../../hooks/useGetData";
import { CardRestaurant, Title } from "./Styles"
import { goToDetails } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const FeedCards = ({text, filter}) => {

  const navigate = useNavigate()
  const { data, isLoading } = useGetData('/restaurants')
  const search = text
  const category = filter
  
  console.log(category)
  return (
    <>
      {isLoading 
      ? (<Spinner />) 
      : data?.restaurants?.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(search.toLowerCase()) && restaurant.category.includes(category)
      }).map(restaurant => (
        <CardRestaurant
            key={restaurant.id}
            onClick={() => goToDetails(navigate, restaurant.id)} 
          >
          <img 
            src={restaurant.logoUrl} 
            alt={`Logo do restaurante ${restaurant.name}`}
          />
          <div>
            <Title>{restaurant.name}</Title>
            <span>
              <p>
                {`${restaurant.deliveryTime - 10}
                  - ${restaurant.deliveryTime} min`}
              </p>
              <p>Frete R${restaurant.shipping},00</p>
            </span>
          </div>
        </CardRestaurant>
      ))}
    </>
  )
}

export default FeedCards