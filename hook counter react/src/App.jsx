import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15);


  // let counter = 15;


  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter)
      console.log(`Add value`, counter); 
    } else {
      alert('You cannot add more than 20 !');
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter)
      console.log(`Remove value`, counter);
    } else {
      alert('You cannot remove less than 0 !')
    }
  }


  return (
    <>
    <p>UI updation ko react control krta h by the help of hooks! {counter}</p>
      <h1>Starting hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value by 1 : {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove value by 1: {counter}</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
