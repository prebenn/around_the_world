import React from "react";

//Ganske selvforklarende komponent, denne oversetter fra engelsk til norsk

function TranslateTransportMode ({ transport }) {
    
    if(transport.mode === "bus") {
        return(

                <p>Buss</p>




        );
    } else if (transport.mode === "metro") {
        return(

                <p>T-bane</p>





        );
    } else if (transport.mode === "foot") {
        return(
             <p>Gå</p>

        );
    } else if (transport.mode === "rail") {
        return(

                <p>Tog</p>




        );
    } else if (transport.mode === "tram") {
        return(

                <p>Trikk</p>




        );
    } else if (transport.mode === "air") {
        return(

                <p>Fly</p>




        );
    } else if (transport.mode === "water") {
        return(

                <p>Ferge</p>




        );
    }


}

export default TranslateTransportMode;