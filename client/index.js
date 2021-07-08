import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import BattleLine from './components/BattleLine.jsx';
import Square from './components/Square.jsx';
import Quote from './components/Quote.jsx';
import './reactStyles.css';


// import Anime from 'react-anime';

const styles = {
  enemy: {
    backgroundColor: '#C9CCCF',
    color: 'black',
    border: '2px solid black',
    width: '95%',
    margin: '0 auto',
    height: '30px',
    fontSize: '22px',
    textShadow: '1px 2px #FECB00',
    boxShadow: '1px 2px #FECB00'
  },
  select : {
    'appearance': 'none',
    'border': 'none',
    /* needed for Firefox: */
    'overflow': 'hidden',
    textDecoration: 'underline',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontWeight: 'bold',
    fontFamily: 'Lato',
    fontSize: '22px',
    color:'rgb(52, 63, 86)'
  }
}
//#FECB00


const HelloWorld = () => {
  const [formation, setFormation] = useState('battleLine');

  const handleChange = (event) => {
    setFormation(event.target.value);
  };

    return (
        <div>
          <div style={{textAlign: 'center'}}>
            <h1>Napoleonic Infantry Tactics</h1>
            <p>Napoleon's Grand Armee raged over continental Europe like wildfire, razing cities and countryside alike over the years 1803 to 1815. </p>

            <form style={{display: 'inline'}}>
              <label>
                <select style={styles.select} value={formation} onChange={handleChange}>
                  <option style={styles.select} value="battleLine">Battle Line</option>
                  <option value="column">Column</option>
                  <option value="square">Square</option>
                </select>
              </label>
            </form>
          </div>
            <hr></hr>
            <hr></hr>
            <div style={{height: '300px', textAlign: 'center'}}>
                <div style={styles.enemy}>Enemy Artillery and Infantry</div>
            </div>
            <div>
              {formation === "battleLine" ? <BattleLine /> : <div></div>}
              {formation === "square" ? <Square /> : <div></div>}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3 style={{textAlign: 'center', fontSize: '24px', color: 'black', textShadow: '.7px .1px red'}}>French Battalion</h3>
            <br></br>
            <br></br>
            <hr></hr>
            <div style={{textAlign: 'center'}}>
              <Quote />
            </div>
        </div>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("reacty"));