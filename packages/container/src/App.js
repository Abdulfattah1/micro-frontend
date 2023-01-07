import React from 'react';
import MarketingApp from './components/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generatedClassName = createGenerateClassName({
    productionPrefix: 'ca'
})
export default () => {
    return (
        <StylesProvider generateClassName={generatedClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}