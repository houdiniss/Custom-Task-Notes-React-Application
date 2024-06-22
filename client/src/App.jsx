import MainHeader from "./components/MainHeader.jsx";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <>
      <MainHeader />
      <Outlet/>
    </>
  )
}

export default App;
