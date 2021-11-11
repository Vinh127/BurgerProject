import React, { useState } from 'react';
import { Route, Redirect, Switch, Router } from 'react-router';
import history from './utils/history';
import { ROUTERS } from './Constants/router';


import HomePage from './pages/Home';

import CheckoutPage from './pages/Checkout';
import OrderPage from './pages/Order';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

import ErrorPage from './pages/ErrorPage';

// Common Component
import RegularLayout from './Common/RegularLayout';

function BrowserRouter() {
    return (
        <>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={"/home"} />} />

                    <RegularLayout
                        exact
                        path={ROUTERS.REGISTER}
                        component={RegisterPage}
                    />

                    <RegularLayout
                        exact
                        path={ROUTERS.LOGIN}
                        component={LoginPage}
                    />

                    <RegularLayout
                        exact
                        path={ROUTERS.HOME}
                        component={HomePage}
                    />

                    <RegularLayout
                        exact
                        path={ROUTERS.CHECKOUT}
                        component={CheckoutPage}
                    />

                    <RegularLayout
                        exact
                        path={ROUTERS.ORDER}
                        component={OrderPage}
                    />

                    OrderPage

                    <Route
                        path="*"
                        component={ErrorPage}
                    />
                </Switch>
            </Router>

        </>
    )
}
export default BrowserRouter;