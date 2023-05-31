import { useState } from 'react';
import './App.css';
import CardComponent from './Components/Card/CardComponent';
import InputComponent from './Components/Input/InputComponent';


function App() {

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [card, setCard] = useState({});
  const [list, setList] = useState([]);


  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value)
  }

  const handleButtonClick = (event) => {

    event.preventDefault()

        setTimeout(() => {
          setCard(
            {
              title: title,
              imgUrl: imgUrl
            }
          );
        }, 300);
    
        setTimeout(() => {
          setList([...list, card])
        }, 300);
  
  }

  return (
    <>
      <h2>BANDS BANNER</h2>

      <form>

        <InputComponent
          title="Nome da banda"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}

        />

        <InputComponent
          title="Link para imagem da banda"
          type="url"
          value={imgUrl}
          fnOnChange={handleChangeImgUrl}
        />

        <button onClick={handleButtonClick}>Salvar</button>

      </form>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        width: "100%"
      }}>
        
      {
        list.map(e => <CardComponent title={e.title} imgUrl={e.imgUrl}/>)
      }
      </div>
    </>
  )
}

export default App