import MainHeader from "./components/MainHeader.jsx";
import { Outlet } from "react-router-dom";



function Root() {
  return (
    <>
      <MainHeader />
      <Outlet/>
    </>
  )
}

export default Root;
