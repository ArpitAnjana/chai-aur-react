import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const element = (
//   <a href='https://google.com' target='_blank'>visit google</a>
// )

const reactelement = React.createElement(
  'a',
  {href:"https://youtube.com", target:'_blank'},
  'click me to visit youtube'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  // reactelement
  <App /> 
    // element // object calling 
  

)
