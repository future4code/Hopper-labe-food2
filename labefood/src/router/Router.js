import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "../pages/InitialPage/InitialPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<InitialPage />} />
        {/* <Route path={} element={} />
        <Route path={} element={} />
        <Route path={} element={} />
        <Route path={} element={} />
        <Route path={} element={} />
        <Route path={} element={} />
        <Route path={} element={} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
