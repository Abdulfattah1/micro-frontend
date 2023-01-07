import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history';
const mount = (el, { onNavigate, defaultHistory, initialEntries }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries
    });
    ReactDOM.render(<App history={history} />, el);

    history.listen(onNavigate);

    return {
        onParentNaviate({ pathname }) {
            if (history.location?.pathname !== pathname) {
                history.push(pathname);
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-app');
    const history = new createMemoryHistory();
    if (!!devRoot) {
        mount(devRoot, { defaultHistory: history });
    }
}

export { mount };