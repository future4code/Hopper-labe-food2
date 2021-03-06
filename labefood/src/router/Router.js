import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditAddress from "../components/ProfileCards/EditComponents/EditAddress";
import EditProfile from "../components/ProfileCards/EditComponents/EditProfile";
import AddAdressPage from "../pages/AddAdressPage/AddAdressPage";
import CartPage from "../pages/CartPage/CartPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import InitialPage from "../pages/InitialPage/InitialPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<InitialPage />} />
         <Route path={"/login"} element={<LoginPage/>} />
        <Route path={"/signUp"} element={<SignUpPage/>} />
        <Route path={"/addAdress"} element={<AddAdressPage/>} />
        <Route path={"/restaurants"} element={<FeedPage/>} />
        <Route path={"/restaurants/:id"} element={<DetailsPage/>} />
        <Route path={"/restaurants/:restaurantId/order"} element={<CartPage/>} />
        <Route path={"/profile"} element={<ProfilePage/>} /> 
        <Route path={"/editAddress"} element={<EditAddress/>} /> 
        <Route path={"/editProfile"} element={<EditProfile/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default Router
