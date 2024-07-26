/**
 * Formats a date as a string with the format "Month Day, Year".
 *
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

/**
 * Calculates the percentage of a value relative to a total.
 *
 * @param {number} total - The total value.
 * @param {number} value - The value to calculate the percentage of.
 * @returns {number} - The percentage value, rounded to two decimal places.
 */
export function calculatePercentage(total, value) {
  if (total === 0) return 0;
  return Number(((value / total) * 100).toFixed(2));
}

/**
 * Converts an object to a query string.
 *
 * @param {Object} obj - The object to convert.
 * @returns {string} - The resulting query string.
 */
export function getQueryParamsFromObj(obj) {
  if (!obj) return "";
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
}

/**
 * Retrieves metadata from product details.
 *
 * @param {Object} productDetails - The product details object.
 * @returns {Object} - The metadata object.
 */
export function getMetaDataofReview(productDetails) {
  return {
    total_reviews: +productDetails.totalReviews || 0,
    total_5_star_reviews: +productDetails.total_5_star_reviews || 0,
    total_4_star_reviews: +productDetails.total_4_star_reviews || 0,
    total_3_star_reviews: +productDetails.total_3_star_reviews || 0,
    total_2_star_reviews: +productDetails.total_2_star_reviews || 0,
    total_1_star_reviews: +productDetails.total_1_star_reviews || 0,
    aggregateRating: productDetails.aggregateRating,
    Id: "asdfghjkl",
  };
}

/**
 * Checks whether an element with a specific field value exists in the list.
 *
 * @param {Array<Object>} list - The list of objects to check.
 * @param {*} value - The value to match against.
 * @param {string} field - The field in the objects to match the value against.
 * @returns {boolean} - True if an element with the specified field value exists, false otherwise.
 */
export function containsElement(list, value, field) {
  return list.some((item) => item[field] === value);
}

/**
 * Capitalizes the first letter of each word in a sentence.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The sentence with the first letter of each word capitalized.
 */
export function capitalizeFirstLetters(sentence) {
  if (!sentence) return sentence; // Return the original sentence if it's empty or undefined
  return sentence
    .split(" ") // Split the sentence into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a single string
}

/**
 * Generates a random number between 6 (inclusive) and a specified limit (exclusive).
 *
 * @param {number} limit - The upper bound for the random number (exclusive).
 * @returns {number} - A random number between 6 and limit.
 */
export function generateRandomNumber(limit) {
  if (limit <= 5) {
    limit = 6; // Ensure the limit is at least 6
  }

  // Generate a random number between 6 (inclusive) and limit (exclusive)
  let randomNumber = Math.floor(Math.random() * (limit - 6)) + 6;
  return randomNumber;
}
