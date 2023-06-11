import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import CommentListComponent from './components/CommentList/CommentListComponent';
import FormComponent from './components/Form/FormComponent';

function App() {
  const [comments, setComments] = useState([]);

  const commentsFetch = async () => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    setComments([...response.data]);
  };
  
  useEffect(() => {
    commentsFetch();
  },[]);


  return (
    <>
      <h1>Comentários</h1>
      <br/>
      <FormComponent list={comments} fnOnSubmit={setComments}/>
      <br/>
      <CommentListComponent list={comments}/>
    </>
  )
}

export default App
