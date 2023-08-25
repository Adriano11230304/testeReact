import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Usuarios from '../pages/Usuarios'
import Login from '../pages/Login'
import { isAuthenticated } from '../components/auth'

export default function Routers(){
    
    const Private = ({ Item }) => {
        const signed = isAuthenticated();
        console.log(signed);

        return signed ? <Item /> : <Login msg={"usuário não logado!"}/>;
    };

    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/home" element={<Private Item={Home}/>} />
                    <Route exact path="/usuarios" element={<Private Item={Usuarios} />} />
                </Routes>
            </Router>
        </>
    )
}