import React, {useState, useEffect} from 'react';
import Anime from 'react-anime';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState({
    name: '',
    quote: '',
    date: '',
    rank: '',
    source: ''
  })

  useEffect(() => {
    let options = {
      method: 'get',
      url: 'http://localhost:3000/quote',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    };
    axios(options).then((response) => {
      let data = response.data;
      console.log('Response from request for quotes', data);
      setQuote({
        name: data.fullName,
        quote: data.quote,
        date: data.date,
        rank: data.rank,
        source: data.source
      })
    }).catch((err) => {
      console.log('Error get requests for quotes: ', err);
    })
  }, []);

  return (
    <div>
      <h2 style={{fontSize: '22px'}}>Quote from the Era:</h2>
      <div>
        <p style={{fontSize: '20px', fontStyle: 'italic'}}>{quote.quote}</p>
        <p>-{quote.name}, {quote.rank}, {quote.date}</p>
      </div>



    </div>
  )
}

export default Quote;