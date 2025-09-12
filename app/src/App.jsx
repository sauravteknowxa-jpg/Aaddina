
import { Route, Routes } from "react-router-dom";
import Addina from "./component/Addina";
import Home from "./component/Home";
import Pages from "./component/Pages";
import Blog from "./component/Blog";
import Shop from "./component/Shop";
import Contact from "./component/Contact";
import About from "./component/About";


function App(){
  return(
    <>
      
      
      <Routes>
         <Route path="/"  element={<Addina />}>
              < Route index element={<Home />}/>
              < Route path="about" element={<About />}/>
              
              < Route path="pages" element={<Pages />}/>
              < Route path="blog" element={<Blog />}/>
              < Route path="shop" element={<Shop />}/>
              < Route path="contact" element={<Contact />}/>
         </Route>
      </Routes>
    </>
  )
}
export default App;