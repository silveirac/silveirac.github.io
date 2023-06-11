export default function TextComponent ({grade, fnOnChange}) {
    const handleOnChange = (event) => fnOnChange(event.target.value);

    return (
        <div>
            <input type="text" name="textInput" value={grade} placeholder="Nota do aluno" onChange={handleOnChange}/>
        </div>
    )     
}