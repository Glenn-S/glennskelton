import React, { Component } from "react";
import PDFViewer from '../../components/PDFViewer';
//import { Document, Page, PDFDownloadLink } from "@react-pdf/renderer";
//import App from '../../components/App';

export default class Resume extends Component {
  
  render() {
    return (
      <div>
        <h2 className="ui center aligned header">
          Resume
        </h2>
        <p>
          Content coming soon
        </p>
        <PDFViewer
/>      </div>
    );
  }
};

/*
<div style={{ width: 600 }}>
          <PDFDownloadLink document={<App />} fileName="../../files/resume.pdf">
            {({ blob, url, loading, }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
        </div>
*/