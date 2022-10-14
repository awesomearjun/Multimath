import { useRef } from "react"
import "../styles/Flashcards.css"

function Flashcards({title, answer}) {
  let answerBox = useRef('');
  let incorrectCounter = 0;

  const handleClick = () => {
    console.log(answerBox.current.value)
    
    if (parseInt(answerBox.current.value) === answer) {
      alert("Correct!")
      window.location.reload();
    } else {
      if (incorrectCounter >= 5) {
        alert(`Not quite, the answer is ${answer}. Nice work!`)
      } else {
        alert("Incorrect")
        incorrectCounter += 1;
        console.log(incorrectCounter)
        answerBox.current.value = "";
      }

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