import React, { Component } from "react";
//import PDFViewer from '../../components/PDFViewer';
//import PDFJSBackend from '../../backend/pdfjs';
//import { Document, Page, PDFDownloadLink } from "@react-pdf/renderer";
//import App from '../../components/App';

export default class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resume: '/resume.pdf'
    }
  }

  downloadResume = (url, name) => {
    var link = document.createElement('a');
    link.href = url;
    link.click();
  }
  
  render() {
    return (
      <div style={{ height: "100%" }}>
        <h2 className="ui center aligned header">
          Resume
        </h2>
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
          </div>
          <a href={this.state.resume} download className="ui primary button">Download</a>
        </div>
      </div>
    );
  }
};
/*
<PDFViewer 
          backend={PDFJSBackend}
          src='/resume.pdf'
        />
*/