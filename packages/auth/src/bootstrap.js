import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to startup the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory  || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if(onNavigate) {
        history.listen(onNavigate);
    }
    ReactDOM.render(<App onSignIn={onSignIn} history={history} />,el);

    return {
        onParentNavigate({ pathname: nextPathName}) {
            const { pathname } = history.location;
            if(pathname !== nextPathName) {
                history.push(nextPathName);
            }
        }
    }
}


// Call Mount function immediately
// If we are in developemt or in isolation
if(process.env.NODE_ENV == 'development') {
    const devRoot = document.getElementById("_auth_dev_root");
    if(devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// We are running through container
// We should export the mount

export { mount }