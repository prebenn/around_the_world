import React from "react";
import Result from "./Result";

//Den overordnede strukturen på rutekortene som blir tegnet opp under søket. 
//Kaller inn result for å strukturere hver enkel reise

function Results ({ results, openPopup, fromPlace, toPlace }) {
    return(
        <div className="rutekort">
            {results.map((result, index) => (
                <div>
                    <Result
                        result={result}
                        fromPlace={fromPlace}
                        toPlace={toPlace}
                    />

                    {/* Denne button og funksjon står for at når du trykker på en reise som kommer opp under søket
                        skal du få opp riktig indeks du trykket på. Da må man sende inn indeksen til mappen til en funksjon
                        i App.js */}
                     <button className="seDetaljerBtn" onClick={() => openPopup(results[index])}>Se detaljer</button>
                </div>
            ))}

        </div>

    );
}

export default Results;