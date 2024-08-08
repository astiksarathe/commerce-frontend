import { useLocation } from "react-router-dom";

const useQueryParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const getQueryParam = (key) => {
    return searchParams.get(key);
  };

  const getAllQueryParams = () => {
    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  };

  return { getQueryParam, getAllQueryParams };
};

export default useQueryParams;
