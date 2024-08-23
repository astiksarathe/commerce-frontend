import { notifyError } from "./Notification";

/**
 * Formats a date as a string with the format "Month Day, Year".
 *
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(dateA) {
  const date = new Date(dateA);
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

/**
 * Calculates the estimated delivery date range.
 *
 * @returns {string} - The formatted estimated delivery date range.
 */
export function calculateEstimatedDeliveryDate() {
  const currentDate = new Date();

  // Calculate start date (current date + 4 days)
  const startDate = new Date();
  startDate.setDate(currentDate.getDate() + 4);

  // Calculate end date (current date + 7 days)
  const endDate = new Date();
  endDate.setDate(currentDate.getDate() + 7);

  // Format the start and end dates
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  // Return the formatted delivery date range
  return `${formattedStartDate} - ${formattedEndDate}`;
}
export const addressRenderer = (address) => {
  const key = ["address1", "landmark", "city", "state", "country", "pincode"];
  const addressArr = [];

  for (let k of key) {
    if (address[k]) {
      addressArr.push(
        <span className={`delivery_${k}`} key={k}>
          {address[k] + ", "}
        </span>
      );
    }
  }
  return addressArr;
};

export function formatCurrency(val = "0") {
  const amount = val.toString();
  let numberString = amount.replace(/[₹,\s]/g, "");

  // Parse the string to a float
  let number = parseFloat(numberString);

  // Format the number with commas
  const formattedNumber = number.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `₹ ${formattedNumber}`;
}

/**
 * Extracts specific product details from the payload.
 * @param {Object} payload - The action payload containing product details.
 * @returns {Object} - An object with the extracted product details.
 */
export const extractProductDetails = (product) => {
  const productSchema = {
    description: 1,
    shortDescription: 1,
    specification: 1,
    category: 1,
    productType: 1,
    vendor: 1,
    variantAvailable: 1,
    available: 1,
    inventory: 1,
    images: 1,
    price: {
      cost: 1,
      minPrice: 1,
      maxPrice: 1,
    },
    tags: 1,
    dimensions: 1,
    weight: 1,
    weightUnit: 1,
    taxIncluded: 1,
    isReturnAvailable: 1,
    isReplaceable: 1,
    CODAvailable: 1,
    preOrderBookingAvailable: 1,
    aggregateRating: 1,
    totalReviews: 1,
    total_5_star_reviews: 1,
    total_4_star_reviews: 1,
    total_3_star_reviews: 1,
    total_2_star_reviews: 1,
    total_1_star_reviews: 1,
    options: 1,
    variants: 1,
    referral: 1,
    FAQ: 1,
    fields: 1,
    status: 1,
    continueSellingIfOutOfStock: 1,
    warrantyInMonths: 1,
  };
  const filteredProduct = {};

  for (const key of Object.keys(product)) {
    if (key === "price") {
      filteredProduct.price = {
        MRP: product.price.MRP,
        sellingPrice: product.price.sellingPrice,
      };
    } else if (productSchema[key] === undefined) {
      filteredProduct[key] = product[key];
    }
  }

  return filteredProduct;
};

export const isCustomFormValid = (form, productDetails) => {
  const { fields } = productDetails;
  const fieldsLength = fields?.length || 0;

  // If we don't have custom fields
  if (fieldsLength === 0) {
    return true;
  }
  // When we have custom fields
  for (let field of fields) {
    const value = form.getFieldValue(field.fieldName);
    const errorMessage = isCustomFieldValid(field, value);

    if (errorMessage !== null) {
      notifyError(errorMessage);
      return false;
    }
  }
  return true;
};

export function isCustomFieldValid(field, value) {
  const { fieldLabel, fieldType, isRequired, maxLength, minLength } = field;

  // Check if the field is required and the value is not provided
  if (isRequired && !value) {
    return `Please upload ${fieldLabel} properly.`;
  }

  // Check if the field is of type IMAGE and validate the content
  if (fieldType === "IMAGE") {
    if (value?.file?.error) {
      return `Please upload '${fieldLabel}' properly.`;
    }
    return null;
  }

  // Validate the length if minLength and maxLength are specified
  if (minLength > 0 && value.length < minLength) {
    return `${fieldLabel} must be at least ${minLength} characters long.`;
  }

  if (maxLength > 0 && value.length > maxLength) {
    return `${fieldLabel} must be no longer than ${maxLength} characters.`;
  }

  // If all checks pass, the field is valid
  return null; // null indicates no errors, so the field is valid
}

export const getValueByKey = (list, key) => {
  const selectedOption = list.find((option) => option.key === key);

  if (!selectedOption) {
    // Handle the case where the option is not found

    console.error(`Option with key "${key}" not found.`);

    return [null, null];
  }

  return [selectedOption.key, selectedOption.label];
};

export function renderReviewText(reviewCount) {
  if (reviewCount === 1) {
    return "1 review";
  } else if (reviewCount > 1) {
    return `${reviewCount} reviews`;
  }
  return "No reviews";
}

export function isCreatedInLast7Days(createdAt) {
  // Convert createdAt to a Date object
  const productDate = new Date(createdAt);
  const currentDate = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  // Check if the product's creation date is within the last 7 days
  return productDate >= sevenDaysAgo && productDate <= currentDate;
}

/**
 * Determines the availability of a product based on pre-order and available status.
 *
 * @param {boolean} preOrderBookingAvailable - Indicates if pre-order booking is available.
 * @param {boolean} available - Indicates if the product is available in stock.
 * @returns {boolean} - Returns true if pre-order is available or the product is available in stock.
 */
export const checkAvailability = (preOrderBookingAvailable, available) => {
  if (preOrderBookingAvailable) {
    return true;
  }
  return available;
};
