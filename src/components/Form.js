import { useState } from "react";

export default function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(`Usuário ${name} foi cadastrado com a senha ${senha}!!`);
    }

    const [name, setName] = useState(null)
    const [senha, setSenha] = useState(null)

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label>Nome: </label>
                    <input id="name" name="name" type="text" placeholder="Digite seu nome" onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input id="password" name="password" type="password" placeholder="Digite sua senha" onChange={e => setSenha(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}