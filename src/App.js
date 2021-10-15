import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { useState } from 'react';


let onLista = JSON.parse(localStorage.getItem('listaMercado'))
if(!onLista){
  onLista = []
}

function App() {
  const [lista, setTasks] = useState(onLista);

  const addTask = (elemento) => {
    const actualizaLista = [...lista];

    actualizaLista.push({
      nombre: elemento
    })

    //clon
    localStorage.setItem('listaMercado', JSON.stringify(actualizaLista))
    setTasks(actualizaLista)
  }

  const deleteLista = (Index) => {
    const actualizaLista = [...lista];

    actualizaLista.splice(Index, 1)

    //Actualizamos el task con el valor del clon
    localStorage.setItem('listaMercado', JSON.stringify(actualizaLista))
    setTasks(actualizaLista)
  }


  return (
    <div className="container">
      <div className="container-fluid">

        <Form onAdd={addTask} />

        <List allLista={lista} onDelete={deleteLista}/>

      </div>
    </div>
  );
}

export default App;
