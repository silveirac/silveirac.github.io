export default function SelectComponent ({disciplinas, fnOnChange}) {

    const handleOnChange = (event) => {
        fnOnChange(event.target.value);
    }

    return (
        <div>
            <select name="selectInput" onChange={handleOnChange}>
                {
                    disciplinas.map(e => <option key={disciplinas.indexOf(e)} value={disciplinas.indexOf(e)}>{e.name}</option>)
                }
            </select>
        </div>
    );
}