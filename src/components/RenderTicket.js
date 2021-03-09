import React from "react";


//den mer detaljerte komponenten for å rendre hver enkelt billett. Her må vi kunne skille på
//forskjellige fremkomstmidler, og returne den riktige billetten for hvilken indeks av .map som peker
//på hvilke "modes" fra reisen. I hvert object som er en reise fra API, så er det flere legs som inneholder reisemåtene
//og i disse legsa er det endelig en .mode som er hva slags fremkomstmiddel det er. Denne komponenten returnerer riktig
//fremkomstmiddel.

function RenderTicket ({ selectedTicket }) {

    const simpleStartTime = new Date(selectedTicket.aimedStartTime).toLocaleTimeString('no-NO',
        { timeStyle: 'short', hour12: false});

    const travelDate1 = new Date(selectedTicket.aimedStartTime).toLocaleDateString("no-NO",
        { weekday: "long", month: "long", day: "numeric"});

    const travelDate = travelDate1.charAt(0).toUpperCase() + travelDate1.slice(1);

    if(selectedTicket.mode === "bus") {
        return(
            <div className="ticketDiv">
                <p>Bussbillett</p>
                <p>Buss - {selectedTicket.line.publicCode}</p>
                <p>{selectedTicket.authority.name}</p>
                <p>Fra {selectedTicket.fromPlace.name} til {selectedTicket.toPlace.name}</p>
                <p>Avgang: {simpleStartTime}</p>
                <p>{travelDate}</p>

            </div>


        );
    } else if (selectedTicket.mode === "metro") {
        return(
            <div className="ticketDiv">
                <p>T-banebillett</p>
                <p>T-bane - {selectedTicket.line.publicCode}</p>
                <p>{selectedTicket.authority.name}</p>
                <p>Fra {selectedTicket.fromPlace.name} til {selectedTicket.toPlace.name}</p>
                <p>Avgang: {simpleStartTime}</p>
                <p>{travelDate}</p>
                

            </div>



        );
    } else if (selectedTicket.mode === "foot") {
        return(
            <div></div>

        );
    } else if (selectedTicket.mode === "rail") {
        return(
            <div className="ticketDiv">
                <p>Togbillett</p>
                <p>Tog - {selectedTicket.line.publicCode}</p>
                <p>{selectedTicket.authority.name}</p>
                <p>Fra {selectedTicket.fromPlace.name} til {selectedTicket.toPlace.name}</p>
                <p>Avgang: {simpleStartTime}</p>
                <p>{travelDate}</p>

            </div>


        );
    } else if (selectedTicket.mode === "tram") {
        return(
            <div className="ticketDiv">
                <p>Trikkebillett</p>
                <p>Trikk - {selectedTicket.line.publicCode}</p>
                <p>{selectedTicket.authority.name}</p>
                <p>Fra {selectedTicket.fromPlace.name} til {selectedTicket.toPlace.name}</p>
                <p>Avgang: {simpleStartTime}</p>
                <p>{travelDate}</p>

            </div>


        );
    } else if (selectedTicket.mode === "air") {
        return(
            <div className="ticketDiv">
                <p>Flybillett</p>
                <p>Fly - {selectedTicket.line.publicCode}</p>
                <p>{selectedTicket.authority.name}</p>
                <p>Fra {selectedTicket.fromPlace.name} til {selectedTicket.toPlace.name}</p>
                <p>Avgang: {simpleStartTime}</p>
                <p>{travelDate}</p>

            </div>


        );
    } else if (selectedTicket.mode === "water") {
        return(
            <div className="ticketDiv">
                <p>Fergebillett</p>
                <p>Ferge - {selectedTicket.line.publicCode}</p>
                <p>{selectedTicket.authority.name}</p>
                <p>Fra {selectedTicket.fromPlace.name} til {selectedTicket.toPlace.name}</p>
                <p>Avgang: {simpleStartTime}</p>
                <p>{travelDate}</p>

            </div>


        );
    }

}

export default RenderTicket;