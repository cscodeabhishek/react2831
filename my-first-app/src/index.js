import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client'; // client here is for 18 version
import HelloWorld from './HelloWorld';
const root =ReactDOM.createRoot(document.getElementById('root'));
// create a simple component here
// function HelloWorld(){
//   return <h1>Hello World</h1>; // allowed to return only single element here ((multiple element returning is not allowed here))
// }

// to return multiple element you can use [reactFragment] 
// short hand for writing the react Fragment is [ <> </> ]
// function HelloWorld(){
//   return <>
//     <h1>Hello World</h1>
//     <p>this is para</p>
//     </>
// }
root.render(
  <React.StrictMode>
    <HelloWorld/>
  </React.StrictMode>
)