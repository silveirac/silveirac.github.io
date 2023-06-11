import { useEffect } from "react";

export default function TextareaComponent ({name, value, placeholder, fnOnChange}) {
    
    const handleOnChange = (event) => {
        fnOnChange(event.target.value)
    }

    return (
        <textarea 
            rows="5"
            name={name} 
            placeholder={placeholder} 
            onChange={handleOnChange}
            value={value}
            ></textarea>
    );
}