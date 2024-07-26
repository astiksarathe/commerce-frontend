export function capitalizeFirstLetters(sentence) {
  if (!sentence) return sentence;
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateRandomNumber(limit) {
  if (limit <= 5) {
    limit = 6;
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
  if (total === 0) return 0;
  return Number(((value / total) * 100).toFixed(2));
}

export function getQueryParamsFromObj(obj) {
  if (!obj) return "";
  let query = "";
  Object.keys(obj).forEach((key) => {
    query += `${key}=${obj[key]}&`;
  });
  console.log({ query });
  return query;
}

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
