import React from "react"
import TranslateTransportMode from "./TranslateTransportMode"

function Result({ result, toPlace, fromPlace }) {

    const simpleEndTime = new Date(result.endTime).toLocaleTimeString('no-NO',
        { timeStyle: 'short', hour12: false});

    const simpleStartTime = new Date(result.startTime).toLocaleTimeString('no-NO',
        { timeStyle: 'short', hour12: false});

    const travelDate1 = new Date(result.startTime).toLocaleDateString("no-NO",
        { weekday: "long", month: "long", day: "numeric"});

    const travelDate = travelDate1.charAt(0).toUpperCase() + travelDate1.slice(1);

    //Dette er for å tegne opp transportmidlene som kommer opp først når du gjør søket, 
    //henter også inn en komponent til å oversette fra engelsk til norsk fordi responsen er på engelsk

    return (
        <div className="rutekortInnhold">
            <p className="rutekortTittel">{fromPlace} → {toPlace}</p>
            <p>{travelDate}</p>
            <p>Start: {simpleStartTime}</p>
            <ul>
                {
                    result.legs.map((transport, i) => <li key={i}>{<TranslateTransportMode transport={transport} />}</li>)
                }
            </ul>
            <p>Fremme: {simpleEndTime}</p>

            
            

        </div>

    );
}

export default Result;