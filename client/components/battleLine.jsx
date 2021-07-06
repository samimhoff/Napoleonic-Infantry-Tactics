import React, {useState, useEffect} from 'react';
import Anime from 'react-anime';
const BattleLine = () => {

  const generateCompany = (column, rower) => {
    const grid = [column, rower];
    const col = grid[0];
    const row = grid[1];
    const numberOfSoldiers = col * row;
    for (let i = 0; i < numberOfSoldiers.length; i++) {
      return <div key={i * col} style={styles.square}></div>
    }
  }

  return (
    <Anime style={{display: 'inline-block'}}translateY={[0, 25]}>
      <div style={{width: '80%', margin: '0 auto'}}>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
      </div>
      <div style={{width: '80%', clear: 'both', margin: '0 auto'}}>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
        <div style={styles.square}></div>
      </div>
    </Anime>

  )
}
const styles = {
  square: {
    width: '25px',
    height: '25px',
    color: 'steelblue',
    float: 'left',
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor: 'steelblue',
    margin: '5px'
  },
  grenadier: {
    width: '25px',
    height: '25px',
    color: 'steelblue',
    border: '2px solid red',
    float: 'left',
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor: 'steelblue',
    margin: '5px'
  }
}

export default BattleLine;