import { useRef } from "react"

function Flashcards({title, answer}) {
  let answerBox = useRef('');

  const handleClick = () => {
    console.log(`answer typed: ${answerBox.current.value}`);

    if (answerBox.current.value == answer) {
      console.log("CORRECT MY GUY");
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <input placeholder="Your answer goes here" ref={answerBox} />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Flashcards;