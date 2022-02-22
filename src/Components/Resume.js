import React from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from './JDiesResume2.22PDF.pdf';


export const Resume = () => {
  return <div>
     <div>
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  </div>;
};
 
export default Resume;