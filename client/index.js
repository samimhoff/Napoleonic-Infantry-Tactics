import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import BattleLine from './components/BattleLine.jsx';
import './reactStyles.css';


// import Anime from 'react-anime';

const styles = {
  enemy: {
    backgroundColor: '#C9CCCF',
    color: '#EF2D00',
    border: '2px solid black',
    width: '95%',
    margin: '0 auto',
    height: '30px',
    fontSize: '20px'
  }
}


const HelloWorld = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Napoleonic Infantry Tactics</h1>
            <p>This website's purpose is to educate the user about Infantry tactics in the Napoleonic era of warfare.</p>
            <hr></hr>
            <div style={{height: '300px'}}>
                <div style={styles.enemy}>ENEMY INFANTRY</div>
            </div>
            <div>
              <BattleLine />
            </div>
        </div>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("reacty"));