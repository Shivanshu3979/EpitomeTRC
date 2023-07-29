import React,{useEffect} from 'react';
import { Route, Navigate, Outlet } from 'react-router';
import { DefaultLayout } from '../layout/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../login/loginSlice';
import { fetchNewAccessJWT } from '../../api/userApi';
import { getUserProfile } from '../../page/dashboard/userAction';


const isAuth = true;
export const PrivateRoute=({children, ...rest})=>{
    const dispatch=useDispatch();
    const {isAuth}=useSelector(state=>state.login);
    const {user}=useSelector(state=>state.user);

    useEffect(()=>{
        const updateAccessJWT = async()=>{
            const result=await fetchNewAccessJWT();
            result && dispatch(loginSuccess);
        }
        
        !user._id && dispatch(getUserProfile());
        !sessionStorage.getItem('accessJWT') && localStorage.getItem('crmSite') && updateAccessJWT();

        !isAuth && sessionStorage.getItem('accessJWT') && dispatch(loginSuccess());
    },[dispatch, isAuth, user._id]);

    return isAuth?(
        <DefaultLayout><Outlet/></DefaultLayout>       
    ):<Navigate to="/"/>
}