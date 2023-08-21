import apiNova from '../services/apiNova';
import Header from '../components/Header';
import Nav from '../components/Nav';
import { useState, useLayoutEffect } from 'react';
import Loader from '../components/Loader';

export default function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function signin(e){
        e.preventDefault();

    }

    async function handleInputNameChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if(target.name === 'email'){
            setEmail(value);
        } else if (target.name === 'password'){
            setPassword(value);
        }
        
        console.log("email", email);
        console.log("password", password);
    }

    return (
        <div className='container-fluid'>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4"></div>
                    <form className="py-3 col-4 mt-3 border" onSubmit={signin} method="post">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control" name="email" placeholder="Escreva seu E-mail" onChange={handleInputNameChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" id="password" className="form-control" name="password" required placeholder="Escreva sua senha" onChange={handleInputNameChange} />
                        </div>
                        <button className="btn btn-outline-dark" type="submit">Entrar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}