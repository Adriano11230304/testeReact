import Button from "./eventos/Button";

export default function Evento({ numero }){
    function meuEvento(){
        console.log("Opa, fui ativado!" + numero);
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="meu primeiro evento"/>
            {/*<button onClick={ meuEvento }>Ativar</button>*/}
        </div>
    )
}