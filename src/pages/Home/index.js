import { Link } from 'react-router-dom';
import Header from '../../components/header'
import '../../css/style.css'

function Home(){
    return (
        <div className='container-fluid'>
            <Header/>
            <div className='row'>
                <nav className='col-md-2 d-none d-md-block bg-dark sidebar'>
                    <div className='sidebar-sticky mt-3' >
                        <ul className='nav flex-column'>
                            <li className='nav-item'>
                                <Link className='nav-link text-light' to="/">
                                    <p>Acessar Home</p>
                                </Link>
                            </li>
                            <li className='nav-item'>    
                                <Link className='nav-link text-light' to="/usuarios">
                                    <p>Acessar Usuários</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Home;