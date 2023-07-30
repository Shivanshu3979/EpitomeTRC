import React,{useState} from "react";

import "./entry.style.css";
import {LoginForm} from "../../component/login/login.comp";
import {ResetPassword} from "../../component/login/ResetPassword.comp";

export const Entry=()=>{
    const [frmLoad, setFrmLoad]=useState("login");

    const handleOnResetSubmit = e => {
		e.preventDefault();
	};

    const formSwitcher = frmType =>{
        setFrmLoad(frmType);
    }

    return(
        <div className="entry-page bg-info">
            <div className="jumbotron form-box">
                {frmLoad === 'login' && (<LoginForm 
                formSwitcher={formSwitcher}/>)}
                
                {frmLoad === 'rest' && (<ResetPassword 
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                //email={email}
                />
                )}

            </div>
        </div>
    )
} 