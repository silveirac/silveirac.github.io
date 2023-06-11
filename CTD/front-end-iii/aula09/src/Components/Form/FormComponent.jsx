import { useState, useEffect } from "react";
import SelectComponent from "../Input/Select/SelectComponent";
import TextComponent from "../Input/Text/TextComponent";
import styles from "./FormComponent.module.css";

export default function FormComponent ({disciplinas, setDisciplinas}) {
    const [disciplinaIndex, setDisciplinaIndex] = useState(0)
    const [grade, setGrade] = useState("")
    const [isFormValid, setFormValid] = useState(false)

    useEffect(() => {

        if(grade != "" && grade >= 0 && grade <= 10) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }

    }, [disciplinaIndex, grade])

    const handleButtonClick = (event) => {
        event.preventDefault();

        let temp = disciplinas;
        temp[disciplinaIndex].students.push(parseFloat(grade));
        temp[disciplinaIndex].avg = temp[disciplinaIndex].students.reduce((prev, curr) => prev + curr)/temp[disciplinaIndex].students.length;

        setDisciplinas([...temp]);
        setGrade("");
    }

    return (
        <form>
            <SelectComponent disciplinas={disciplinas} fnOnChange={setDisciplinaIndex}/>
            <TextComponent fnOnChange={setGrade} grade={grade}/>
            <button 
                disabled={!isFormValid}
                onClick={handleButtonClick}            
            >Salvar</button>
        </form>
    );
}