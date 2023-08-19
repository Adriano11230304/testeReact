import '../css/style.css'
import logout from './img/logout.png'

export default function Header(){
    return (
        <div className="row bg-dark text-white">
            <div className="col-md-2 mt-3 ml-3 mb-2">
                <h3 style={{fontSize: '20px'}}>Sistema Teste</h3>
            </div>
            <div className="col-md-9 text-center mt-3 mb-2" style={{fontSize: '20px'}}>Sistema para testes react</div>
            <div className="navbar-nav navbar-right mt-2 mb-2 ml-5">
                <a className="btn btn-outline-light" href="#">
                    <img src={logout} width="30px" height="25px" title="Sair do sistema" alt='Imagem de logout'/>
                </a>
            </div>
        </div>
    )
}