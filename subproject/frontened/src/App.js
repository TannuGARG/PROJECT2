
import './App.css';
import DisplayPage from "./display";
import ShowCity from "./showcity"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route  path="/" element={<DisplayPage />}> </Route>
          <Route  path="/city" element={<ShowCity />}/> 
        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
//tamanna garg   