// React
import React from 'react';

// <Helmet> component for setting the page title/meta tags
import Helmet from 'react-helmet';
import Todos from '../todo/Todos';

export default () => (
  <div>
    <Helmet>
      <title>TODO App</title>
      <meta name="description" content="ReactQL starter kit app" />
      {/* <base href="http://localhost:8081/" /> */}
    </Helmet>
    <Todos />
  </div>
);
