import { useContext, useState } from "react";
import TicketsContext from "../contexts/TicketsContext";

export default function FormComponent() {
    const [description, setDescription] = useState("");
    const [selection, setSelection] = useState("");
    const {tickets, dispatch} = useContext(TicketsContext);

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleSelection = (event) => {
        setSelection(event.target.value)
    }
    
    const handleSalvarTicket = (event) => {
        // event.preventDefault();
        if(tickets.length > 0) {
            dispatch (
                {
                    type: "ADD_TICKET",
                    payload: [...tickets, {
                        id: {description}&&{selection},
                        description: description,
                        answerTime: selection
                    }]
                }
            )

        } else {
            dispatch (
                {
                    type: "ADD_TICKET",
                    payload: [{
                        id: description+selection,
                        description: description,
                        answerTime: selection
                    }]
                }
            )
        }
    }


    return(
        <div>
            <input type="text" name="description" placeholder="Descrição" value={description} onChange={handleDescription}/>
            <select name="answerTime" value={selection} onChange={handleSelection}>
                <option value="5">5min</option>
                <option value="10">10min</option>
                <option value="15">15min</option>
                <option value="30">30min</option>
                <option value="45">45min</option>
                <option value="60">1h</option>
                <option value="1d">1 dia</option>
                <option value="3d">3 dias</option>
                <option value="1w">1 semana</option>
            </select>
            <button onClick={handleSalvarTicket}>Salvar Ticket</button>
        </div>
    );
}