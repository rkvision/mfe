import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to startup the app
const mount = (el) => {
    ReactDOM.render(<App />,el);
}


// Call Mount function immediately
// If we are in developemt or in isolation
if(process.env.NODE_ENV == 'development') {
    const devRoot = document.getElementById("_marketing_dev_root");
    if(devRoot) {
        mount(devRoot);
    }
}

// We are running through container
// We should export the mount

export { mount }