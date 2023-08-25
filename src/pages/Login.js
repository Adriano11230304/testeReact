import Header from '../components/Header';
import { useState } from 'react';
import { signin } from '../components/auth';
import { Navigate } from 'react-router-dom';

export default function Login({msg}){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState(false);

    async function handleInputNameChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if(target.name === 'email'){
            setEmail(value);
        } else if (target.name === 'password'){
            setPassword(value);
        }

        return;
    }
   
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await signin(email, password);
        if (res) {
            console.log(res, user);
            setUser(res);
        }
    }

    return (
        <div className='container-fluid'>
            <Header/>
            <form className="container-fluid" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="py-3 col-4 mt-3 border">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control" name="email" placeholder="Escreva seu E-mail" onChange={handleInputNameChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" id="password" className="form-control" name="password" required placeholder="Escreva sua senha" onChange={handleInputNameChange} />
                        </div>
                        <button className="btn btn-outline-dark" type="submit">Entrar</button>

                    </div>
                </div>
            </form>
            <div>{msg}</div>
            {user && (<Navigate to="/home" replace={true} />)}
        </div>
    )
}