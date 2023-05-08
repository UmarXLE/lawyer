import {Router, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Router path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
