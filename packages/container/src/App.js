import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { lazy, Suspense } from 'react';

const marketingApp = lazy(() => import('./components/MarketingApp'));
const authApp = lazy(() => import('./components/AuthApp'));

const generatedClassName = createGenerateClassName({
    productionPrefix: 'ca'
})
export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generatedClassName}>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/auth" component={authApp}></Route>
                        <Route path="/" component={marketingApp}></Route>
                    </Switch>
                </Suspense>
            </StylesProvider>
        </BrowserRouter>
    )
}