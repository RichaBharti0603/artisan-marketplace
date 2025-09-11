import React, { createContext, useContext, useState } from "react";
import { ARTISANS as STATIC_ARTISANS } from "../data/artisans";

const ArtisanContext = createContext();

export function ArtisanProvider({ children }) {
  const [artisans, setArtisans] = useState(STATIC_ARTISANS);

  const addArtisan = (newArtisan) => {
    setArtisans((prev) => [...prev, newArtisan]);
  };

  return (
    <ArtisanContext.Provider value={{ artisans, addArtisan }}>
      {children}
    </ArtisanContext.Provider>
  );
}

export const useArtisans = () => useContext(ArtisanContext);
