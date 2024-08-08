import React, { useCallback, useMemo } from "react";
import UrlContext from "./UrlContext";
import { useLocation, useNavigate } from "react-router-dom";

const UrlProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const addQueryParams = useCallback(
    (params) => {
      const searchParams = new URLSearchParams(location.search);
      Object.keys(params).forEach((key) => {
        searchParams.set(key, params[key]);
      });

      navigate({
        pathname: location.pathname,
        search: searchParams.toString(),
      });
    },
    [location, navigate]
  );
  const getQueryParams = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [location]);
  const value = useMemo(
    () => ({ addQueryParams, navigate, getQueryParams }),
    [addQueryParams, navigate, getQueryParams]
  );

  return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
};

export default UrlProvider;
