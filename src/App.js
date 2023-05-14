import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import LegalServicesPage from "./pages/LegalServicesPage/LegalServicesPage";
import AccountingServicesPage from "./pages/AccountingServicesPage/AccountingServicesPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/legalservice' element={<LegalServicesPage/>}/>
          <Route path='/accountingservice' element={<AccountingServicesPage/>}/>

      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
