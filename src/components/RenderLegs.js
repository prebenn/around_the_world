import React from "react";

function RenderLegs ({ data }) {


    const simpleStartTime = new Date(data.aimedStartTime).toLocaleTimeString('no-NO',
    { timeStyle: 'short', hour12: false});

    const simpleEndTime = new Date(data.aimedEndTime).toLocaleTimeString('no-NO',
        { timeStyle: 'short', hour12: false});

    const to = data.toPlace.name;
    const from = data.fromPlace.name;

  // Denne komponenten rendrer ut mer detaljert rute når du trykker om å se detaljer


    if(data.mode === "bus") {
        return(
            <div className="renderLegsMainDiv">
                <p className="renderLegsTravelPlaces">{from} - {to}</p>

                <p className="legsImgDesc">Buss</p>
                <p className="renderLegsTime">{simpleStartTime} - {simpleEndTime}</p>



            </div>


        );
    } else if (data.mode === "metro") {
        return(
            <div className="renderLegsMainDiv">
                <p className="renderLegsTravelPlaces">{from} - {to}</p>

                <p className="legsImgDesc">T-bane</p>
                <p className="renderLegsTime">{simpleStartTime} - {simpleEndTime}</p>



            </div>

        );
    } else if (data.mode === "foot") {
        return(
            <div className="renderLegsMainDiv">
                <p className="renderLegsTravelPlaces">{from} - {to}</p>

                <p className="legsImgDesc">Gå</p>
                <p className="renderLegsTime">{simpleStartTime} - {simpleEndTime}</p>


            </div>

        );
    } else if (data.mode === "rail") {
        return(
            <div className="renderLegsMainDiv">
                <p className="renderLegsTravelPlaces">{from} - {to}</p>

                <p className="legsImgDesc">Tog</p>
                <p className="renderLegsTime">{simpleStartTime} - {simpleEndTime}</p>


            </div>

        );
    } else if (data.mode === "tram") {
        return(
            <div className="renderLegsMainDiv">
                <p className="renderLegsTravelPlaces">{from} - {to}</p>

                <p className="legsImgDesc">Trikk</p>
                <p className="renderLegsTime">{simpleStartTime} - {simpleEndTime}</p>


            </div>

        );
    } else if (data.mode === "air") {
        return(
            <div className="renderLegsMainDiv">
                <p className="renderLegsTravelPlaces">{from} - {to}</p>

                <p className="legsImgDesc">Fly</p>
                <p className="renderLegsTime">{simpleStartTime} - {simpleEndTime}</p>
                


            </div>

        );
    } else if (data.mode === "water") {
        return(
            <div className="renderLegsMainDiv">
                <p className="renderLegsTravelPlaces">{from} - {to}</p>

                <p className="legsImgDesc">Ferge</p>
                <p className="renderLegsTime">{simpleStartTime} - {simpleEndTime}</p>
                


            </div>

        );
    }


}

export default RenderLegs;