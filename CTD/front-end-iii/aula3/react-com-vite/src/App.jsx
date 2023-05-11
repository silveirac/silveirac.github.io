import './App.css'

const usuario = {
  nome : "Cauê",
  sobrenome : "Silveira"
}
const OlaMundo = () => <h3>Hello Vite!</h3>
const Saudacao = () => <p>Seja bem-vindo, {usuario.nome} {usuario.sobrenome}!</p>
const Lista = () => {
  return (
    <>
      <h3>Lista de Conteúdos Abordados na Aula</h3>
      <ul>
        <li>O que é Vite?</li>
        <li>Vite ou webpack? Qual é maelhor? Existe um melhor?</li>
        <li>Criando um primero projeto com Vite</li>
      </ul>
    </>

  );
}

const ImagemAleatoria = () => <img src="https://conexaopanvel.faccat.br/wp-content/uploads/2020/06/1_vHHBwcUFUaHWXntSnqKdCA-800x450.png" alt="Imagem Aleatória"/>

function App() {
  return (
    <>
      <OlaMundo/>
      <Saudacao/>
      <Lista/>
      <ImagemAleatoria/>
    </>
  );
}

export default App