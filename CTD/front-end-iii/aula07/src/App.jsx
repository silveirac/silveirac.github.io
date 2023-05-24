import { useState } from 'react'
import './App.css'
import ItemComponent from './components/ItemComponent'

function App() {
  const [items, setItems] = useState([])
  const [description, setDescription] = useState('')

  const handleClickButton = () => {
    let temp = items
    temp.push(description)
    setItems(temp)
    setDescription("")
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  return (
    <>
      <input type="text" name="text-field" id="text-field" onChange={handleChangeDescription} value={description}/>
      <input type="button" onClick={handleClickButton} value="Adicionar" />
      <ul>
        {
          items.map(e => <ItemComponent content={e}/>)
        }
      </ul>
    </>
  )
} 

export default App
