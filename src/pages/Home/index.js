import { Link } from 'react-router-dom';
import '../../css/style.css'

function Home(){
    return (
        <div className='row'>
            <div className='navbar-nav navbar-right mt-2 mb-2 ml-5'>
                <h1>Home</h1>
                <nav >
                    <Link to="/">
                        <h2>Acessar Home</h2>
                    </Link>
                    <Link to="/usuarios">
                        <h2>Acessar Usuários</h2>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Home;