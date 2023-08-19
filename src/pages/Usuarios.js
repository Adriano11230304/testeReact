import Header from '../components/header';
import Nav from '../components/Nav';
import api from '../services/api'

function Usuarios() {
    function getUsers(){
        
    }

    return (
        <div className='container-fluid'>
            <Header />
            <div className='row'>
                <Nav />
                <h1>Users</h1>
            </div>
        </div>
    )
}

export default Usuarios;