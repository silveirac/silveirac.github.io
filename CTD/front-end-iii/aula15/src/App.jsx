import axios from "axios";
import { useEffect, useState } from "react";
import FormComponent from "./components/Form/FormComponent";
import CardListComponent from "./components/CardList/CardListComponent";
import styles from "./App.css"

function App() {
  const [products, setProducts] = useState ([]);
  const [formId, setFormId] = useState("");
  

  useEffect(() => {
    if(formId == "") {
      fetchProducts();
    }
  },[formId]);

  const fetchProducts = async () => {
    let response = await axios.get("api/products/")
    setProducts(response.data.products)
  }

  return (
    <>
      <h1>Cadastro de Produtos</h1>
      <FormComponent id={formId} list={products} fnOnSubmit={setProducts} fnIdToUpdate={setFormId}/>
      <CardListComponent list={products} fnOnSubmit={setProducts} fnIdToUpdate={setFormId}/>
    </>
  );
}

export default App;
