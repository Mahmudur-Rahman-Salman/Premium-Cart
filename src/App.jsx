import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footers from "./components/Footers"
import { useLocation } from 'react-router-dom';


function App() {
 const location = useLocation(); 
 console.log(location); 
  return (
    <>
    <Navigation></Navigation>
     <Outlet></Outlet>
     <Footers></Footers>
    </>
  )
}

export default App
