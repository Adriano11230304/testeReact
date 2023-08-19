import Header from '../components/header'
import '../css/style.css'
import Nav from '../components/Nav'

function Home(){
    return (
        <div className='container-fluid'>
            <Header/>
            <div className='row'>
                <Nav />
                <h1>Home</h1>
            </div>
        </div>
    )
}

export default Home;