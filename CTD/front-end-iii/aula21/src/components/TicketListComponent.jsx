import TicketComponent from "./TicketComponent";

export default function TicketListComponent ({list}) {

    return(
        <div>
            {
                list.length > 0 ?
                list.map(e => <TicketComponent 
                    key={e.id}
                    id={e.id}
                    description={e.description}
                    answerTime={e.answerTime}
                />)
                : "Nenhum ticket aberto!"
            }
        </div>
    );
}