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
// "June 21, 2024"
export function formatDate1(dateStr) {
  const date = new Date(dateStr);

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function calculatePercentage(total, value) {
  return ((value / total) * 100).toFixed(0);
}
