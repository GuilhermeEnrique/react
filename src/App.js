import Nome from "./components/Nome";
import { useState } from 'react'; 

function App(){
  const [nome, setNome] = useState('João P.');

  function handleChangeName(nome) {
    setNome(nome);
  }

  return (
    <div>
      <h1>
        Bem vindo ao primeiro App em react
      </h1>
      <h2>Olá: {nome} </h2>
      <button onClick={ () => handleChangeName('Guilherme Enrique')}> Mudar nome </button>
    </div>

  );
}

export default App; 