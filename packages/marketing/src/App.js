import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const genratedClassName = createGenerateClassName({
    productionPrefix: 'ma'
})
export default () => {
    return <div>
        <StylesProvider generateClassName={genratedClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing}></Route>
                    <Route path="/" component={Landing}></Route>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}