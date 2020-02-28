/*import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { Document, Page } from '@react-pdf/renderer';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numPages: null,
      pageNumber: 1
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({
      numPages,
    });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <PageTemplate>
        <h2 className="ui center aligned header">
          Resume
        </h2>
        <div className="">
          <p>
           Content coming soon
          </p>
          <Document 
            file="../../files/resume.pdf" 
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages} </p>
        </div>
      </PageTemplate>
    );
  }
};*/

import React, { Component } from "react";
//import { Document, Page, PDFDownloadLink } from "@react-pdf/renderer";
//import App from '../../components/App';

export default class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <h2 className="ui center aligned header">
          Resume
        </h2>
        <p>
          Content coming soon
        </p>
        

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
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