import React from "react";
import Confirmation from "./Confirmation";
import MySite from "./MySite";
import RenderLegs from "./RenderLegs";

function Popup({ selected, closePopup, confirmed, confirmTrip, mySite, goToMySite, fromQuery, toQuery, toggleTickets, showTickets, openTicketModal, openBybilModal, bybilTicket, showBybilTicket, toggleBybilTicket }) {

   
   //For å lage nye variabler med tid som xx:xx fra en ISO8601 formatert string som kommer fra JSON response
    const simpleStartTime = new Date(selected.startTime).toLocaleTimeString('no-NO',
        { timeStyle: 'short', hour12: false});

    // const simpleEndTime = new Date(selected.endTime).toLocaleTimeString('no-NO',
    //     { timeStyle: 'short', hour12: false});

    //Samme her, bare lage enklere dato fra ISO8601
    const travelDate1 = new Date(selected.startTime).toLocaleDateString("no-NO",
        { weekday: "long", month: "long", day: "numeric"});

    //new Date() over gir liten første bokstav, så denne lager en stor første bokstav
    const travelDate = travelDate1.charAt(0).toUpperCase() + travelDate1.slice(1);


    //Hvis ikke bruker har bekreftet reise, og knappen til minside ikke er trykket på. Videre logikk går nedover
    //for å bla deg gradvis videre til minside. Statesa blir skrevet true gjennom funksjoner som ligger onClick på knapper
    //derfor er det lett å gjøre en sjekk som det her
    if(!confirmed && !mySite) {

        


        return (
            <section className="popup">
                <div className="content">
                <button className="close" onClick={closePopup}>← Tilbake til søk</button>
                
                <div className="popUpHeaderTxt">
                    <h1>Din valgte reise</h1>
                    <h2>{fromQuery} → {toQuery}</h2>
                    <h3>{travelDate}, fra {simpleStartTime}</h3>
                </div>


                <div className="renderLegsWrapper">
                {selected.legs.map((data, index) => (
                <div>
                    <RenderLegs
                        data={data}
                    />
                </div>
            ))}
                </div>


                <button className="confirmTravelBtn" onClick={confirmTrip}>Bekreft valg</button>
                    
                </div>


            </section>


        );

        } else if (confirmed && !mySite) {
            return (
                <section className="popup">
                <div className="content">
                    <Confirmation 
                        selected={selected} 
                        goToMySite={goToMySite} 
                        fromQuery={fromQuery} 
                        toQuery={toQuery} 
                    />
                    
                </div>


            </section>

            );

        } else if (confirmed && mySite) {
            return (

                <section className="popup">
                <div className="content">
                <MySite 
                    selected={selected} 
                    toQuery={toQuery} 
                    fromQuery={fromQuery} 
                    toggleTickets={toggleTickets} 
                    showTickets={showTickets} 
                    toggleBybilTicket={toggleBybilTicket} 
                    showBybilTicket={showBybilTicket} 
                    openTicketModal={openTicketModal} 
                    openBybilModal={openBybilModal} 
                    bybilTicket={bybilTicket} />
                    
                </div>


            </section>


            );






        }
}

export default Popup;