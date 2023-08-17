import { Link } from 'react-router-dom';

function Usuarios() {
    return (
        <div>
            <h1>Usuarios</h1>
            <nav>
                <Link to="/">
                    <h2>Acessar Home</h2>
                </Link>
                <Link to="/usuarios">
                    <h2>Acessar Usuários</h2>
                </Link>
            </nav>
        </div>
    )
}

export default Usuarios;