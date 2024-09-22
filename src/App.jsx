import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/home/Home"
import { Planet } from './components/planet/Planet';
import { Crew } from './components/crew/Crew';
import { Technology } from './components/technology/Technology';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Destination' element={<Planet />} />
            <Route path='/Crew' element={<Crew />} />
            <Route path='/Technology' element={<Technology />} />
          </Routes>
        </Layout>
      </Router>

    </>
  );
}

export default App;
