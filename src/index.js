import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MetaTags from 'react-meta-tags';
ReactDOM.render(
  <React.StrictMode>
    <MetaTags>
            <title>Válogatott Seggfejek</title>
            <link rel="icon" type="image/png" href="favicon-16x16.png"/>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:link" content="./favicon.ico" />
          </MetaTags>
    <App />
  
  </React.StrictMode>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
