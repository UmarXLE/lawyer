import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
