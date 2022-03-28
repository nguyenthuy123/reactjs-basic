import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom';

export function PrivateRoute (props: RouteProps) {
    // Check if user is logged in
    // If yes, show route
    // Otherwise, redirect to login page

    const isLoggedIn = Boolean(localStorage.getItem('acces_token'));
    if (!isLoggedIn) return <Redirect to="/login" />;

    return <Route {...props}/>;
}