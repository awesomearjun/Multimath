import Flashcards from "../components/Flashcards";
import generateNumber from "../components/GenerateNumber"
import LinkToHome from "../components/LinkToHome"

function Multiplication() {
    let numbers = [generateNumber(1000), generateNumber(1000)];

    return (
        <div>
            <Flashcards title={`What's ${numbers[0]} × ${numbers[1]}`} answer={numbers[0] * numbers[1]} />
            <LinkToHome />
        </div>
    )
} 

export default Multiplication;
