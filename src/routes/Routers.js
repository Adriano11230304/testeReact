import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Usuarios from '../pages/Usuarios'
import Login from '../pages/Login'

export default function Routers(){
    
    /*const Private = ({ Item }) => {
        const { signed } = useAuth();

        return signed > 0 ? <Item /> : <Signin />;
    };*/

    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/usuarios" element={<Usuarios />} />
                </Routes>
            </Router>
        </>
    )
}