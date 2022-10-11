import Flashcards from "../components/Flashcards";
import generateNumber from "../components/GenerateNumber"
import LinkToHome from "../components/LinkToHome"

function Division() {
    let numbers = [generateNumber(13), generateNumber(13)];

    if (numbers[0] < numbers[1]) {
        numbers[0] = 12;
    }

    return (
        <div>
            <Flashcards title={`What's ${numbers[0]} ÷ ${numbers[1]}`} answer={numbers[0] / numbers[1]} />
            <LinkToHome />
        </div>
    )
} 

export default Division;