import axios from 'axios';
import { useEffect, useState } from "react";
import InputComponent from "./Input/InputComponent";
import styles from "./FormComponent.module.css"
import TextareaComponent from "./Textarea/TextareaComponent";

export default function FormComponent ({list, fnOnSubmit}) {
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formBody, setFormBody] = useState("");
    const [isFormValid, setFormValid] = useState(false);

    useEffect(() => {
        if(formName.length == 0 || formEmail.length == 0 || formBody.length == 0) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [formName, formEmail, formBody]);

    const handleButtonClick = (event) => {
        event.preventDefault();

        if (formEmail.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && formEmail != "") {
            let temp = {
                postId: 1,            
                name: formName,            
                email: formEmail,            
                body: formBody            
            };
    
            commentPost(temp, fnOnSubmit);
        } else {
            alert("Digite um e-mail válido!")
        }
    }

    const commentPost = async (body, fnOnSubmit) => {
        let response = await axios.post("https://jsonplaceholder.typicode.com/comments", body);
        fnOnSubmit([response.data, ...list])
    }
    
    return (
        <form>
            <div className={styles.commentHeader}>
            <InputComponent 
                type="text"
                name="commentName" 
                value={formName} 
                placeholder="Nome" 
                fnOnChange={setFormName}/>

            <InputComponent 
                type="email"
                name="commentEmail" 
                value={formEmail} 
                placeholder="Email" 
                fnOnChange={setFormEmail}/>
            </div>
            <TextareaComponent 
                name="commentBody" 
                value={formBody} 
                placeholder="Digite aqui o que quiser..." 
                fnOnChange={setFormBody}/>
            <button 
                className={styles.sendButton}
                onClick={handleButtonClick}
                disabled={!isFormValid}
            >Enviar</button>
        </form>
    );
}