import { useEffect, useState } from 'react'
import TableComponent from './Components/Table/TableComponent'
import FormComponent from './Components/Form/FormComponent'
import './App.css'

function App() {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect( () => {
    if (disciplinas.length == 0) {
      setDisciplinas([
        {
            name: "Banco de Dados",
            students: [],
            avg: 0
        },
        {
            name: "Desenvolvimento Front-End",
            students: [],
            avg: 0
        },
        {
            name: "Desenvolvimento Back-End",
            students: [],
            avg: 0
        },
    ])
    }    
  }
  ,[]);

  return (
    <>
      {/* <button onClick={add}></button> */}
      <h1>Quadro de Notas</h1>
      <FormComponent disciplinas={disciplinas} setDisciplinas={setDisciplinas}/>
      <br/>
      <TableComponent disciplinas={disciplinas}/>
    </>
  )


}

export default App
