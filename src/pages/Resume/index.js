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
import { Document, Page, PDFViewer } from "@react-pdf/renderer";

export default class App extends Component {
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

        <div style={{ width: 600 }}>
          <PDFViewer>
          <Document
            file="../../files/resume.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
          </PDFViewer>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}