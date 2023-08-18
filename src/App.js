import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Usuarios from './pages/Usuarios'

function App() {
  return (
    <div className="App">
      <Router>
        {/*<Layout>*/}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/usuarios" element={<Usuarios />} />
          </Routes>
      {/*</Layout>*/}
      </Router>
    </div>
  );
}

export default App;
