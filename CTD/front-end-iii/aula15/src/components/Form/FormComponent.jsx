import { useEffect, useState } from "react";
import InputComponent from "./Input/InputComponent";
import styles from "./FormComponent.module.css"
import axios from "axios";

export default function FormComponent ({list, fnOnSubmit, id, fnIdToUpdate}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [isIdVisible, setIdVisible] = useState(false);
    const [isFormValid, setFormValid] = useState(false);

    useEffect(() => {
        fieldsFillForUpdate();
    },[id])

    useEffect(() => {

        if (title !== "" && description !== "" && price !== "" && stock !== "" && category !== "" && image !== "") {
            if (price !== "" && price >= 0) {
                setFormValid(true);
            } else {
                setFormValid(false);
            }
        } else {
            setFormValid(false);
        }

    },[title, price, description, stock, category, image])

    // PREENCHE O FORMULÁRIO COM OS DADOS DO PRODUTO A SER ATUALIZADO
    const fieldsFillForUpdate =  async () => {
        if (id !== "") {
            let response = (await axios.get(`api/products/${id}`)).data.product
            setIdVisible(true)
            setTitle(response.title)
            setDescription(response.description)
            setPrice(response.price.toFixed(2))
            setStock(response.stock)
            setCategory(response.category)
            setImage(response.image)

        } else {
            setIdVisible(false)
            setTitle("")
            setDescription("")
            setPrice("")
            setStock("")
            setCategory("")
            setImage("")
        }
    }

    const handleSaveButton = (event) => {
        event.preventDefault();

        let temp = {
            title: title,
            description: description,
            price: parseFloat(price.replace(",", ".")),
            stock: stock,
            category: category,
            image: image
        }
        if (id == "") {
    
            productPost(temp)
        } else {
            productUpdate(id, temp)
        }

    }
    
    // CADASTRAR PRODUTO
    const productPost = async (body) => {
        let response = await axios.post("api/products/", body)
        fnOnSubmit([
            ...list,
            response.data.product
        ])
    }

    //ATUALIZAR PRODUTO
    const productUpdate = async (id, body) => {
        let response = await axios.put(`api/products/${id}`, body)
        fnIdToUpdate("")                
    }

    return (
        <form>
            <h4 defaultValue="" style={{textAlign: "start"}} hidden={!isIdVisible}>Product Id: {id}</h4>
            <InputComponent 
            type="text"
            name="titleInput"
            value={title}
            placeholder="Título"
            fnOnChange={setTitle}/>

            <InputComponent 
            type="text"
            name="descriptionInput"
            value={description}
            placeholder="Descrição"
            fnOnChange={setDescription}/>

            <InputComponent 
            type="text"
            name="priceInput"
            value={price}
            placeholder="Preço"
            fnOnChange={setPrice}/>

            <InputComponent 
            type="text"
            name="stockInput"
            value={stock}
            placeholder="Estoque"
            fnOnChange={setStock}/>

            <InputComponent 
            type="text"
            name="categoryInput"
            value={category}
            placeholder="Categoria"
            fnOnChange={setCategory}/>

            <InputComponent 
            type="text"
            name="imageInput"
            value={image}
            placeholder="Imagem"
            fnOnChange={setImage}/>

            <button
                onClick={handleSaveButton}
                disabled={!isFormValid}
            >Salvar</button>
            
        </form>
    );
}