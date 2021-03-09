import React, { useState, useEffect } from "react";
import "./App.css";
import createEnturService from "@entur/sdk";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import Modal from "react-modal";
import ModalContent from "./components/ModalContent";

function App() {

  const service = createEnturService({
    //EnTur API krever at man identifiserer seg selv for å gjøre kall til server
    clientName: 'machinehelmet'
  });

  //States som holder styring på hva som skal rendres og ikke, i tillegg til forskjellige
  //viktige states å holde på gjennom applikasjonen som for eksempel hvilke reise du har valgt
  //for å vise riktige billetter
  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [onBoarding, setOnBoarding] = useState(true);
  const [openTicket, setOpenTicket] = useState(false);
  const [openBybil, setOpenBybil] = useState(false);
  const [bybilTicket, setBybilTicket] = useState(false);
  const [state, setState] = useState({
    results: [],
    selected: {},
    confirmed: false,
    mySite: false,
    showTickets: false,
    showBybilTicket: false,
    selectedTicket: {}
  });

  useEffect(()=> {
    getTrip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toQuery]);

  const updateToSearch = e => {
    setToSearch(e.target.value);
  }
  
  const updateFromSearch = e => {
    setFromSearch(e.target.value);
  }

  //Henter søket ut fra input
  const getSearch = e => {
    e.preventDefault();
    setFromQuery(fromSearch);
    setToQuery(toSearch);
    // setToSearch("");
    // setFromSearch("");
  }

  //Funksjon fra EnTur SDK som bygger en fetch for oss gjennom findTrips og to inputs vi gir, før
  //den sender av gårde en fetch
  const getTrip = async () => {
    const response = await service.findTrips(fromQuery, toQuery);
    console.log(response);

    setState(prevState => {
      return { ...prevState, results: response}
    })
  }


  const openPopup = selectedTrip => {
    setState(prevState => {
      return {...prevState, selected: selectedTrip}
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {} }
    });
  }

  const confirmTrip = () => {
    setState(prevState => {
      return {...prevState, confirmed: true}
    });
  }

  const goToMySite = () => {
    setState(prevState => {
      return {...prevState, mySite: true}
    });
  }

  const toggleTickets = () => {
    if (state.showTickets === false) {
      setState(prevState => {
        return {...prevState, showTickets: true}
      });
    } else if (state.showTickets === true) {
      setState(prevState => {
        return {...prevState, showTickets: false}
      });
    }
  }

  const toggleBybilTicket = () => {
    if (state.showBybilTicket === false) {
      setState(prevState => {
        return {...prevState, showBybilTicket: true}
      });
    } else if (state.showBybilTicket === true) {
      setState(prevState => {
        return {...prevState, showBybilTicket: false}
      });
    }
  }

  Modal.setAppElement("#root");

  const closeOnBoardingModal = () => {
    setModalIsOpen(false);
    setOnBoarding(false);

  }

  const openTicketModal = selectedTicket => {
    setOpenBybil(false);
    setModalIsOpen(true);
    setOpenTicket(true);
    setState(prevState => {
      return {...prevState, selectedTicket: selectedTicket}
    });
  }

  const closeTicketModal = () => {
    setModalIsOpen(false);
    setOpenTicket(false);
    setState(prevState => {
      return {...prevState, selectedTicket: {} }
    });
  }

  const openBybilModal = () => {
    setOpenTicket(false);
    setModalIsOpen(true);
    setOpenBybil(true);
  }
  
  const closeBybilModal = () => {
    setModalIsOpen(false);
    setOpenBybil(false);
    setBybilTicket(true);
  }
  


  return (
    <div className="App">
      <header className="App-header">
        <img className="Vy-logo" src="vylogo.png" alt="Vy-logo" />
      </header>
      <main>

        {/* Modal åpnes aller først når du åpner siden for en on boarding. I ModalContent
            komponenten vil endringer av states bestemme videre gjennom siden om Modal skal rendres, 
            og hvilket innhold som skal være i den hvis den rendres */}
        <Modal isOpen={modalIsOpen}>
          <ModalContent 
            modalOpen={setModalIsOpen} 
            onBoarding={onBoarding}
            closeOnBoardingModal={closeOnBoardingModal}
            openTicket={setOpenTicket}
            closeTicketModal={closeTicketModal}
            selectedTicket={state.selectedTicket}
            openBybil={openBybil}
            closeBybilModal={closeBybilModal}
          />
        </Modal>

        {/* Search er komponenten som tar for seg selve søkeelementene og står for funksjoner på de */}
        <Search 
          updateFromSearch={updateFromSearch} 
          updateToSearch={updateToSearch}
          fromSearch={fromSearch}
          toSearch={toSearch}
          getSearch={getSearch}
          getTrip={getTrip}
        />

        {/* Results tegner opp responsen som kommer tilbake fra EnTur sitt API etter man har gjort et søk. */}
        <Results 
          results={state.results}
          openPopup={openPopup}
          fromPlace={fromQuery}
          toPlace={toQuery}
        />

    {/* Rendrer bare Popup hvis du har valgt en billet du vil gå videre med
        Etter første "siden" styrer conditional statements logikken for å komme deg videre */ }
        {(typeof state.selected.startTime != "undefined") ? 
          <Popup 
            selected={state.selected} 
            closePopup={closePopup} 
            confirmed={state.confirmed}
            confirmTrip={confirmTrip}
            mySite={state.mySite}
            goToMySite={goToMySite}
            fromQuery={fromQuery}
            toQuery={toQuery}
            toggleTickets={toggleTickets}
            showTickets={state.showTickets}
            openTicketModal={openTicketModal}
            openBybilModal={openBybilModal}
            bybilTicket={bybilTicket}
            toggleBybilTicket={toggleBybilTicket}
            showBybilTicket={state.showBybilTicket}
          />  
        : false }

      </main>
    </div>
  );
}

export default App;
