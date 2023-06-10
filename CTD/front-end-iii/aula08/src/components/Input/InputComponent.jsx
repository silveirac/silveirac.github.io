export default function InputComponent ({name, type, value, fnOnChange, fnOnKeyUp}) {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input
                name={name} 
                type={type}
                value={value}
                onChange={fnOnChange}
                onKeyUp={fnOnKeyUp}
            />
        </div>
    );
}