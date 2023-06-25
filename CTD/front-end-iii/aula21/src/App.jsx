import { useEffect, useReducer } from 'react';
import './App.css'
import TicketsContext from './contexts/TicketsContext';
import TicketListComponent from './components/TicketListComponent';
import FormComponent from './components/FormComponent';

// Integrantes
// Cauê Silveira
// Lara Mangabeira

function reducer (state, action) {

  switch (action.type) {
    case "ADD_TICKET":
      return action.payload;

    case "DELETE_TICKET":
      return state.filter(ticket => ticket.id != action.payload);
  
    default:
      return state;
  }
}

function App() {

  const [tickets, dispatch] = useReducer(reducer, []);

  useEffect(()=> {
    const getTickets = localStorage.getItem("tickets");

    dispatch(
      {
        type: "ADD_TICKET",
        payload: JSON.parse(getTickets)
      }
    )
  }, []);

  // ATUALIZANDO O STORAGE QUANDO A LISTA DE TICKETS FOR ATUALIZADA
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  return (
    <TicketsContext.Provider value={{tickets, dispatch}}>
      <FormComponent />
      <TicketListComponent list={tickets}/>
    </TicketsContext.Provider>
  )
}

export default App
