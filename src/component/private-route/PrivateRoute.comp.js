import React from 'react';
import { Route, Navigate, Outlet } from 'react-router';
import { DefaultLayout } from '../layout/DefaultLayout';

const isAuth = true;
export const PrivateRoute=({children, ...rest})=>{
    return isAuth?(
        <DefaultLayout><Outlet/></DefaultLayout>       
    ):<Navigate to="/"/>
}