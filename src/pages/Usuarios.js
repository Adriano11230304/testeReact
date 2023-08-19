import Header from '../components/header';
import Nav from '../components/Nav';
import api from '../services/api'

function Usuarios() {
    async function getUsers(){
        const users = await api.get('sdcscds');
        
        console.log("cdscscds");
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