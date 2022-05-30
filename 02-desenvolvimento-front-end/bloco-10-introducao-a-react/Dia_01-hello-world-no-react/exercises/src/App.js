import './App.css';

//aproveita função do portfolio
const Task = (value) => { return (<li key={value}>{value}</li>) }

const tarefas = ['Acordar', 'Tomar-café', 'Estudar', 'Almoçar'];

function App() {
  return (
    <div className="App">
      <ul>{tarefas.map((tarefa) => Task(tarefa))}</ul>
    </div>
  );
}

export default App;
