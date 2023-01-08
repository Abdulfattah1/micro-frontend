import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { createMemoryHistory } from 'history';
const mount = (el, { onNavigate, defaultHistory, initialEntries }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries
    })

    ReactDOM.render(<App history={history} />, el);

    if (!!onNavigate) {
        history.listen(onNavigate);
    }

    return {
        onParentNavigation({ pathname }) {
            if (pathname !== history.location?.pathname) {
                history.push(pathname);
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#auth-app');
    const history = new createMemoryHistory();
    if (!!devRoot) {
        mount(devRoot, { defaultHistory: history });
    }
}

export { mount };