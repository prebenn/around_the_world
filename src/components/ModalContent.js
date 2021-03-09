import React from "react";
import OnBoarding from "./OnBoarding";
import BybilModal from "./BybilModal";


function ModalContent ({ modalOpen, onBoarding, closeOnBoardingModal, openTicket, closeTicketModal, openBybil, closeBybilModal }) {

  //Logikk for hva som skal vises i modal boksen etter hvilke knapper du trykker på og hvor i applikasjonen du er
  if (modalOpen && onBoarding) {
    return (
        <div className="onBoardWrapDiv">
          <OnBoarding  />
          <button className="modalKomIGangBtn" onClick={closeOnBoardingModal}>Kom i gang</button>
        </div>

    );
  } else if (modalOpen && openBybil) {

    return(

      <div>
        <BybilModal />

        <button className="modalLukkBybilBtn" onClick={closeBybilModal}>Reserver bybil</button>

      </div>

    );
  } else if (modalOpen && openTicket) {


    return(
      <div>
        <p className="QRcodeTitle">QR-kode for billett</p>
        <img className="QRcodeImg" src="qrCode.png" alt="QR KODE"></img>
        <button className="modalLukkBillettBtn" onClick={closeTicketModal}>Lukk billett</button>
      </div>


    );
  }

}


  

export default ModalContent;