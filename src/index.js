import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA


const rootNode = document.getElementById('root')
ReactDOM.createRoot(rootNode).render(<App />)

serviceWorkerRegistration.register();