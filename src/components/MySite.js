import React from "react";
import RenderTickets from "./RenderTickets";
import BybilTicket from "./BybilTicket";


function MySite ({ selected, fromQuery, toQuery, toggleTickets, showTickets, toggleBybilTicket, showBybilTicket, openTicketModal, openBybilModal, bybilTicket }) {

//Min side. Bare generelt det overordnede som er i denne komponenten, det meste blir sendt ned til RenderTickets
//komponenten og BybilTicket

    return(
        <div>
            <div className="mySiteHeader">
                <img className="Vy-logo" src="vylogo.png" alt="Vy-logo" />
                <p className="minSideTitle">Min side</p>
                <p className="minSideName">Kari Normann</p>
                <p className="minSideKundeEpost">E-post: kari@normann.no</p>
                <p className="minSideKundeNummer">Kundenummer: 2009760</p>

                <button className="openBybilBtn" onClick={openBybilModal}>Reserver en bybil</button>



                <p className="minSideReiserTxt">Reiser</p>
                <p className="minSidePeriodeBilletter">Periodebilletter</p>
                <p className="minSideAndreKjop">Andre kjøp</p>

            </div>


            <p className="minSideKommendeReiser">Kommende reiser</p>

            <button className="openTicketsBtn" onClick={toggleTickets}>{fromQuery} - {toQuery}  ↓</button>

            {/* Div som er under knappen over, som blir rendret når knappen over trykkes på. I App komponenten er
                toggleTickets funksjonen som switcher frem og tilbake mellom true og false */}
            {showTickets ? <RenderTickets selected={selected} openTicketModal={openTicketModal} /> : null}


            {/* Her blir ikke knappen til å vise bybilbillet vist før du har reservert en. Når den staten at du har
                reservert bil blir true, dukker denne knappen opp. Deretter kan du da rendre ut BybilTicket komponenten
                som er rett under. Den blir også togglet av og på når du trykker på den overordnede knappe, styrt av onClick */}
            {bybilTicket ? <button className="openBybilTicketBtn" onClick={toggleBybilTicket}>Bybilbillett ↓</button> : null}

            {showBybilTicket ? <BybilTicket /> : null}





            
            

        </div>

    );

}

export default MySite;