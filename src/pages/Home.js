import Header from '../components/Header'
import '../css/style.css'
import Nav from '../components/Nav'

function Home(){
    return (
        <div className='container-fluid'>
            <Header/>
            <div className='row'>
                <Nav />
                <div className="col-md-10">
                    <h1>Home</h1>
                </div>
                
            </div>
        </div>
    )
}

export default Home;