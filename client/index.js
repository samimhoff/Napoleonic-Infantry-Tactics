import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import BattleLine from './components/BattleLine.jsx'
// import Anime from 'react-anime';



const HelloWorld = () => {
    return (
        <div style={{}}>
            <h1>Napoleonic Infantry Tactics</h1>
            <p>This website's purpose is to educate the user about Infantry tactics in the Napoleonic era of warfare.</p>
            <BattleLine />
        </div>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("reacty"));