
// Custom hook to handle local storage
export function useLocalStorage() {
  // Function to set an item in local storage
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // Function to get an item from local storage
  const getItem = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  // Function to remove an item from local storage
  const removeItem = (key) => {
    localStorage.removeItem(key);
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
}

