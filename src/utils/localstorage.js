import CryptoJS from "crypto-js";
const secretKey = process.env.REACT_APP_SECEAT;
const setItem = (key, data) => {
  return new Promise((resolve, reject) => {
    try {
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        secretKey
      ).toString();
      localStorage.setItem(key, encryptedData);
      resolve();
    } catch (error) {
      reject("Error encrypting data:", error);
    }
  });
};

const getItem = (key) => {
  return new Promise((resolve, reject) => {
    try {
      const encryptedData = localStorage.getItem(key);
      if (encryptedData) {
        const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        resolve(JSON.parse(decryptedData));
      } else {
        resolve(null);
      }
    } catch (error) {
      reject("Error decrypting data:", error);
    }
  });
};

export { setItem, getItem };
