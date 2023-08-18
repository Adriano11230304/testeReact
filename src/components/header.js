import '../css/style.css'

export default function Header(){
    return (
        <div className="row bg-dark text-white">
            <div className="col-md-2 mt-3 ml-3 mb-2">
                <h3 style={{fontSize: '20px'}}>Sistema Finanças</h3>
            </div>
            <div className="col-md-9 text-center mt-3 mb-2" style={{fontSize: '20px'}}>Sistema para controle de finanças pessoais</div>
            <div className="navbar-nav navbar-right mt-2 mb-2 ml-5">
                <a className="btn btn-outline-light" href="/users/logout">
                    <img src="/img/logout.png" width="30px" height="25px" title="Sair do sistema"/>
                </a>
            </div>
        </div>
    )
}