import { Header } from "./components/Header";
import { Home } from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { InfoHero } from "./components/InfoHero";
import { useEffect, useState } from "react";
import { fetchData } from "./Service";


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData(setData)
  }, []);


  return (
    <Router>
      <div>
        <Header></Header>
        <div className="wrapper">
          <Routes>
            <Route exact path="/" element={<Home data={data} setData={setData} />} />
            <Route path="/info/:id" element={<InfoHero data={data} />} />
          </Routes>
        </div>
      </div >
    </Router>

  );
}

export default App;
