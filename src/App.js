import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <br/>
      <h1>Testando eventos</h1>
      <Evento numero = "1"/>
      {/*<Evento numero="2" />*/}
      {/*<Form/>*/}

      {/*<Pessoa  
        nome="Adriano"
        idade = '28'
        profissao = 'Programador'
        foto = 'https://via.placeholder.com/150'
      />
      <HelloWorld/>
  <List/>*/}
    </div>
  );
}

export default App;
