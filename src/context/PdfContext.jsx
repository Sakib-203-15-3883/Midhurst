import React, { createContext, useState, useContext } from 'react';

const PdfContext = createContext();

export const usePdf = () => useContext(PdfContext);

export const PdfProvider = ({ children }) => {
  const [pdfs, setPdfs] = useState([]);

  const addPdf = (pdf) => {
    setPdfs((prevPdfs) => [...prevPdfs, pdf]);
  };

  return (
    <PdfContext.Provider value={{ pdfs, addPdf }}>
      {children}
    </PdfContext.Provider>
  );
};
