import { useRef, useState } from "react";

export default function Player() {

  const playerName = useRef()    // by using useRef we cannot re-render our component when it is changed or updated

  const [enteredPlayerName, setEnteredPlayerName] = useState('')


  function handleClick() {
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ''; // it will clear input string in input tag
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      {/* <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2> */}
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
