import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/service' element={<ServicesPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
