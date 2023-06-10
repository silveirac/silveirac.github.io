import { useState } from 'react';
import FormComponent from './components/Form/FormComponent';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormComponent />
    </>
  )
}

export default App
