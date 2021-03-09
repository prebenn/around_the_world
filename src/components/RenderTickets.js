import React from "react";
import RenderTicket from "./RenderTicket";

//en overordnet komponent for å strukturere billettene som blir lagt ut, og sørge for at alle blir rendret
//ut likt. 

function RenderTickets ({ selected, openTicketModal }) {
    return(
        <div className="ticketWrapper">
            {selected.legs.map((selectedTicket, index) => (
                <div onClick={openTicketModal}>
                    <RenderTicket
                        selectedTicket={selectedTicket}
                    />
                </div>
            ))}
        </div>

    );

}

export default RenderTickets;