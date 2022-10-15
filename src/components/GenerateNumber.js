function generateNumber(max) {
    max += 1;
    return Math.floor(Math.random() * max);
}

export default generateNumber;