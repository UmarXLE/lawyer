import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import LegalServicesPage from "./pages/LegalServicesPage/LegalServicesPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/service' element={<ServicesPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/legalservice' element={<LegalServicesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
