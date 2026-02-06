import React from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';
import LoginHeader from './loginHeader';
import './login.scss';

const LoginLayoutComponent = ()=>{

    return(
        <div>
      <div className="">
        <LoginHeader />
      </div>
      <div>
        <Outlet />
      </div>
      {/* <MessageModal /> */}
    </div>
    )
}

export default LoginLayoutComponent;