import CityList from './component/CityList';
import CityForecast from './component/CityForecast';
import { Router, Routes, Route } from 'react-router-dom';





function App() {
  
  return (
  <>
  <div>
 
    <h1>Weather App</h1>
      <div><CityForecast></CityForecast>
      </div>
    <Router>
      <Routes>
        <Route path="/city/:cityId" element={<CityList />} />
      </Routes>
    </Router>
    </div>   
      </>
    ) 
}

export default App
