import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Usuarios from '../pages/Usuarios'
import Login from '../pages/Login'

export default function Routers(){
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/usuarios" element={<Usuarios />} />
                </Routes>
            </Router>
        </>
    )
}