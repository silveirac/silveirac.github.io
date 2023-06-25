import { useContext } from "react";
import TicketsContext from "../contexts/TicketsContext";

export default function TicketComponent ({id, description, answerTime}) {
    const {tickets, dispatch} = useContext(TicketsContext)

    const handleDeleteButton = (id) => {
        dispatch({
            type: "DELETE_TICKET",
            payload: id
        })

    }

    return(
        <div>
            <h3>{description}</h3>
            <h4>Tempo para atendimento: {answerTime}</h4>
            <button onClick={()=> handleDeleteButton(id)}>Excluir Ticket</button>
        </div>
    );
}