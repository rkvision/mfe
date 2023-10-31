import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingAppLazy = lazy(()=> import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    const [isSignedIn, setSignedIn] = useState(false);
    const [isSignedOut, setSignedOut] = useState(false);
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedOut={isSignedOut} isSignedIn={isSignedIn} />
                    <Suspense fallback= {<Progress />} >
                        <Switch>
                            <Route path="/auth" >
                                <AuthAppLazy onSignOut={() => { setSignedOut(true); }} onSignIn={() => { setSignedIn(true); }} />
                            </Route>
                            <Route path="/" component={MarketingAppLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    ) 
}