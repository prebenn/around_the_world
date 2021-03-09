import React from "react";

function Confirmation ({ selected, goToMySite, toQuery, fromQuery }) {

    const simpleStartTime = new Date(selected.startTime).toLocaleTimeString('no-NO',
    { timeStyle: 'short', hour12: false});

    const simpleEndTime = new Date(selected.endTime).toLocaleTimeString('no-NO',
        { timeStyle: 'short', hour12: false});

    const travelDate1 = new Date(selected.startTime).toLocaleDateString("no-NO",
    { weekday: "long", year: "numeric", month: "long", day: "numeric"});

    const travelDate = travelDate1.charAt(0).toUpperCase() + travelDate1.slice(1);

    //Siden du får opp etter du har bekreftet reisen du trykket på Igjen, alt over er for å
    //få enklere tid og dato fra en ISO8601 JSON response

    return(
        <div className="confirmationDiv">
            <p className="confirmationHeaderTxt">Reisen din er bekreftet.</p>
            <p className="confirmationHeaderTxt">Ha en fin reise!</p>

            <div className="bekreftReiseDetaljer">
                <p className="dinReiseTxt">Din reise:</p>
                
                <p className="dinReiseDato">{travelDate},</p>
                <p className="dinReiseDato">fra {simpleStartTime} til {simpleEndTime}</p>

                <p className="dinReiseReise">{fromQuery} → {toQuery}</p>
                <br></br>
                <button className="bekreftReiseBtn" onClick={goToMySite}>Til din billettoversikt</button>
            </div>

            <img src="checkmark.png" alt="checkmark" className="checkmarkImg" />




        </div>

    );
}

export default Confirmation;