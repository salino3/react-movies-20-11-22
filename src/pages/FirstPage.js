import React, { useEffect, useState } from 'react';
import Card from '../components/Card';


const FirstPage = ({ first}) => {
  
  const [second, setSecond] = useState();

  useEffect(() => {
    setSecond(first);
  }, [first]);
  // I receive the information, convert it to lowercase and insert it in 'setSecond'
  const handleChange = (event) => {
    let words = event.target.value.toLowerCase();
    setSecond(words);
  };

  return (
    <>
      <div className="divInput">
        <label>Some movies?</label> <br />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Look for a movie"
          name="words"
        />{" "}
      </div>
      <div className="divFirstPage">
        <div className="divCardFirstPage">
          <Card second={second} first={first} />
        </div>
      </div>
    </>
  );
}

export default FirstPage;


