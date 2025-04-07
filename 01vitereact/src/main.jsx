import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//       href: "https://www.google.com",
//       target: "_blank",
//   },
//   children: "Click me to visit Google",
// }

const anotherUser = "Jane Doe2"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit Google',
  anotherUser
)

const anotherElement = (
  <a href='https://www.google.com' target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
