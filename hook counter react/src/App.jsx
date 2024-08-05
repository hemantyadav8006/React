import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15);


  // let counter = 15;


  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter)
      setCounter(counter)
      setCounter(counter)
      setCounter(counter)
      /*
      Interview question: when we call multiple setCounter's 

      Detailed explaination of why does first syntax only updates the count once:
      Initial State: Assume count is initially 69.
      First Call: setCount(count + 1) schedules a state update to set count to 70 (69 + 1).
      Second Call: setCount(count + 1) schedules another state update to set count to 70 (69 + 1), because count is still 69 in this scope.
      Third Call: setCount(count + 1) schedules yet another state update to set count to 70 (69 + 1), again because count is still 69 in this scope.

      In case of functional updater syntax React ensures that changes are made to the latest state of the count hence each function gets access to the latest state of the count variable:
      First Call: setCount(count =>count+1) schedules a state update to set count to 70
      Second Call : schedules a state update to set count to (70+1) because count is now 70 in this scope and so on...
      */
     
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
