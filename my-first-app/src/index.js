import React from 'react';
import ReactDOM from 'react-dom/client'; // client here is for 18 version
function Hello(){
  return <h1>Hello World</h1>
}
ReactDOM.createRoot(document.getElementById('root')).render(<Hello/>)
