import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';


import Header from '../Header';

import './styles.css';

function RegularLayout(props) {
    const { exact, path, component: Component, ...other } = props;
    return (
        <Route
            exact={exact}
            path={path}
            render={(routeProps) => {
                return (
                    <>
                        <Header {...routeProps} />
                        <Component {...other} {...routeProps} />
                    </>
                )
            }}
        />
    );

}
export default RegularLayout;