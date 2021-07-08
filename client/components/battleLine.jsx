import React, {useState, useEffect} from 'react';
import Anime from 'react-anime';

const styles = {
  square: {
    width: '6px',
    height: '9px',
    color: 'steelblue',
    float: 'left',
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor: 'steelblue',
    margin: '1px'
  },
  grenadier: {
    width: '4px',
    height: '7px',
    color: 'steelblue',
    float: 'left',
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor: 'steelblue',
    margin: '1px',
    border: '1px solid red'
  },
  fusilier: {
    width: '4px',
    height: '7px',
    color: 'steelblue',
    float: 'left',
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor: 'steelblue',
    margin: '1px',
    border: '1px solid teal'
  },
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
  }
}


const BattleLine = () => {
  const generateCompany = (column, rower, styler) => {
    console.log('GENERATION!');
    const grid = [column, rower];
    const col = grid[0];
    const row = grid[1];
    const numberOfSoldiers = col * row;
    console.log(numberOfSoldiers);
    var soldiersArr = [];
    for (let i = 0; i < numberOfSoldiers; i++) {
      soldiersArr.push(<div key={i * col} style={styles[styler]}></div>);
    }
    return soldiersArr;
  }

  return (
    <div style={{display: "block", margin: '0 auto'}}>
      <div style={{display: "inline", margin: '0 auto'}}>
        <Anime translateY={[0, 25]  }>
          <div style={{display: 'inline', float: "left", margin: '10px'}}>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'fusilier')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'fusilier')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'fusilier')}
            </div>
            <br></br>
            <p style={{textShadow: '.2px 1px teal', fontSize: '17px'}}>Voltiguer Company</p>
            {/* <div key={'lighte'} style={styles['fusilier']}>Fusiler</div> */}
          </div>
        </Anime>
        <Anime translateY={[0, 25]  }>
          <div style={{display: 'inline', float: "left", margin: '10px'}}>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'square')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
            {generateCompany(1, 33, 'square')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
            {generateCompany(1, 33, 'square')}
            </div>
            <br></br>
            <p style={{textShadow: '.2px 1px steelblue', fontSize: '17px'}}>Fusilier Company</p>
          </div>
        </Anime>
        <Anime translateY={[0, 25]  }>
          <div style={{display: 'inline', float: "left", margin: '10px'}}>
            <div style={{clear: 'both', margin: '0 auto'}}>
            {generateCompany(1, 33, 'square')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
            {generateCompany(1, 33, 'square')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
            {generateCompany(1, 33, 'square')}
            </div>
            <br></br>
            <p style={{textShadow: '.2px 1px steelblue', fontSize: '17px'}}>Fusilier Company</p>

          </div>
        </Anime>
        <Anime translateY={[0, 25]  }>
          <div style={{display: 'inline', float: "left", margin: '10px'}}>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'square')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'square')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'square')}
            </div>
            <br></br>
            <p style={{textShadow: '.2px 1px steelblue', fontSize: '17px'}}>Fusilier Company</p>
          </div>
        </Anime>
        <Anime translateY={[0, 25]  }>
          <div style={{display: 'inline', float: "left", margin: '10px'}}>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'square')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'square')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'square')}
            </div>
            <br></br>
            <p style={{textShadow: '.2px 1px steelblue', fontSize: '17px'}}>Fusilier Company</p>
          </div>
        </Anime>
        <Anime translateY={[0, 25]  }>
          <div style={{display: 'inline', float: "left", margin: '10px'}}>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'grenadier')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'grenadier')}
            </div>
            <div style={{clear: 'both', margin: '0 auto'}}>
              {generateCompany(1, 33, 'grenadier')}
            </div>
            <br></br>
            <p style={{textShadow: '.2px 1px red', fontSize: '17px'}}>Grenadier Company</p>
          </div>
        </Anime>
      </div>
    </div>
  )
}

export default BattleLine;