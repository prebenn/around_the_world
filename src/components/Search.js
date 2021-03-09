import React from "react";


//Search komponenten står for strukturen og oppsettet til søkeelementene, og bruker også funksjoner til å
//putte input inn i variabler som man kan søke med

function Search({ updateToSearch, updateFromSearch, getSearch, getTrip, fromSearch, toSearch }) {
    return (
        <section>

        <h1 className="heitekst">Hei, hvor vil du reise?</h1>
         <form className="search-form" onSubmit={getSearch} >
         <p className="reisetekst">Reise fra</p>
          <input className="search-bar-from" type="text" placeholder="F.eks. Oslo" value={fromSearch} onChange={updateFromSearch}></input>

         <p className="reisetekst">Reise til</p>
          <input className="search-bar-to" type="text" placeholder="F.eks. Bergen" value={toSearch} onChange={updateToSearch}></input>
        <p></p>
        <button className="search-button" type="submit" onClick={getTrip}>Se avganger</button>
        </form>
        </section>
    );
}

export default Search;