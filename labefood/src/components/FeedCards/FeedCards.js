import useGetData from "../../hooks/useGetData";
import { CardRestaurant } from "./Styles"
import { goToDetails } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const FeedCards = () => {

  const navigate = useNavigate()
  const { data, isLoading } = useGetData('/restaurants')

  return (
    <>
      {isLoading 
      ? (<Spinner />) 
      : data && data.map(restaurant => (
        <CardRestaurant
          key={restaurant.id}
          onClick={() => goToDetails(navigate, restaurant.id)} 
        >
          <img 
            src={restaurant.logoUrl} 
            alt={`Logo do restaurante ${restaurant.name}`}
          />
          <div>
            <p>{restaurant.name}</p>
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