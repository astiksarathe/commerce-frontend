export function capitalizeFirstLetters(sentence) {
  if (!sentence) return sentence;
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateRandomNumber(limit) {
  if (limit <= 5) {
    return "Limit should be greater than 5";
  }

  // Generate a random number between 5 (inclusive) and limit (exclusive)
  let randomNumber = Math.floor(Math.random() * (limit - 5)) + 6;
  return randomNumber;
}
