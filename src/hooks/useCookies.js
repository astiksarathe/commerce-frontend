
// Custom hook to handle cookies
export function useCookies() {
  // Function to set a cookie
  const setCookie = (name, value, options = {}) => {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    // Expiry date
    if (options.expires instanceof Date) {
      cookieString += `; expires=${options.expires.toUTCString()}`;
    }

    // Path
    if (options.path) {
      cookieString += `; path=${encodeURIComponent(options.path)}`;
    }

    // Domain
    if (options.domain) {
      cookieString += `; domain=${encodeURIComponent(options.domain)}`;
    }

    // Secure
    if (options.secure) {
      cookieString += "; Secure";
    }

    // HttpOnly
    if (options.httpOnly) {
      cookieString += "; HttpOnly";
    }

    // SameSite
    if (options.sameSite) {
      cookieString += `; SameSite=${options.sameSite}`;
    }

    document.cookie = cookieString;
  };

  // Function to get a cookie by name
  const getCookie = (name) => {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    const cookie = cookies.find((cookie) => cookie.startsWith(`${encodeURIComponent(name)}=`));
    if (cookie) {
      return decodeURIComponent(cookie.split("=")[1]);
    }
    return null;
  };

  // Function to remove a cookie by name
  const removeCookie = (name) => {
    document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };

  return {
    setCookie,
    getCookie,
    removeCookie,
  };
}
