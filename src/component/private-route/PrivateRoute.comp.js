import React,{useEffect} from 'react';
import { Route, Navigate, Outlet } from 'react-router';
import { DefaultLayout } from '../layout/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../login/loginSlice';
import { fetchNewAccessJWT } from '../../api/userApi';

const isAuth = true;
export const PrivateRoute=({children, ...rest})=>{
    const dispatch=useDispatch();
    const {isAuth}=useSelector(state=>state.login)

    useEffect(()=>{
        const updateAccessJWT = async()=>{
            const result=await fetchNewAccessJWT();
            result && dispatch(loginSuccess);
        }
        
        sessionStorage.getItem('accessJWT') && dispatch(loginSuccess())
    },[dispatch]);

    return isAuth?(
        <DefaultLayout><Outlet/></DefaultLayout>       
    ):<Navigate to="/"/>
}