export default function InputComponent ({type, name, value, placeholder, fnOnChange}) {
    const handleOnChange = (event) => {
        fnOnChange(event.target.value)
    }

    return (
      <input type={type} name={name} value={value} placeholder={placeholder} onChange={handleOnChange}/>  
    );
}