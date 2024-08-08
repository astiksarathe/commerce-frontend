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

  const value = useMemo(() => ({ addQueryParams }), [addQueryParams]);

  return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
};

export default UrlProvider;
