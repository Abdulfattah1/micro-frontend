import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
export default ({ history }) => {
    const generatedClass = createGenerateClassName({
        productionPrefix: 'au'
    })
    return (
        <StylesProvider generateClassName={generatedClass}>
            <Router history={history}>
                <Switch>
                    <Route path="/" component={Signin}></Route>
                    <Route path="/auth/signup" component={Signup}></Route>
                </Switch>
            </Router>
        </StylesProvider>
    )
}