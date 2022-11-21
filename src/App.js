import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';

function App() {


 let myApi =
   "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

 const [first, setFirst] = useState();

 const myFetch = async () => {
   const myapi = await fetch(myApi);
   const response = await myapi.json();
   setFirst(response);

   console.log(response);
 };

 useEffect(() => {
   myFetch();
 }, []);


  return (
    <div className="App">
      <header className="App-header">
        <AppRouter first={first} />
      </header>
    </div>
  );
}

export default App;
