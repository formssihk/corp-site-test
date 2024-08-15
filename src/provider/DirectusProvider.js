import React, { createContext, useContext, useEffect, useState } from "react";
import { createDirectus, rest, staticToken } from "@directus/sdk";

const DirectusContext = createContext();

export const DirectusProvider = ({ url, publicStaticToken, children }) => {
  const [directus, setDirectus] = useState(null);

  useEffect(() => {
    console.log("[DEBUG]DirectusProvider -> url:", url);
    console.log("[DEBUG]DirectusProvider -> publicStaticToken:", publicStaticToken);
    const directusInstance = createDirectus(url).with(staticToken(publicStaticToken)).with(rest());
    setDirectus(directusInstance);
  }, [url, publicStaticToken]);

  return (
    <DirectusContext.Provider value={directus}>
      {children}
    </DirectusContext.Provider>
  );
};

export const useDirectus = () => {
  const context = useContext(DirectusContext);
  if (context === undefined) {
    throw new Error("[ERROR]useDirectus must be used within a DirectusProvider");
  }
  return context;
};