import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footers from "./components/Footers"


function App() {
 

  return (
    <>
    <Navigation></Navigation>
     <Outlet></Outlet>
     <Footers></Footers>
    </>
  )
}

export default App
