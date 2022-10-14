import Flashcards from "../components/Flashcards";
import generateNumber from "../components/GenerateNumber"
import LinkToHome from "../components/LinkToHome"

function Division() {
    const numbers = [generateNumber(13), generateNumber(13)];
    const isInteger = num => {
        return num % 1 === 0;
    }

    // If the first number is greater than the second, make the first number 12
    if (numbers[0] < numbers[1]) {
        numbers[0] = 12;
        console.log(numbers[0]);
    }

    while (!isInteger(numbers[0] / numbers[1])) {
        numbers[1] -= 1;

        if (numbers[1] <= 0) {
            numbers[0] = 12;
            numbers[1] = 6;
        }
    }

    return (
        <div>
            <Flashcards title={`What's ${numbers[0]} ÷ ${numbers[1]}`} answer={numbers[0] / numbers[1]} />
            <LinkToHome />
        </div>
    )
} 

export default Division;