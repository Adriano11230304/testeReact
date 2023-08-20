import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Usuarios from '../pages/Usuarios'

export default function Routers(){
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/usuarios" element={<Usuarios />} />
                </Routes>
            </Router>
        </>
    )
}