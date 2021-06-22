import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => {
            const html = styledComponentsSheet.collectStyles(
              <App {...props} />,
            );
            return html;
          },
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }
}
