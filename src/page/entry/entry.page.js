import React,{useState} from "react";

import "./entry.style.css";
import {LoginForm} from "../../component/login/login.comp";
import {ResetPassword} from "../../component/login/ResetPassword.comp";

export const Entry=()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [frmLoad, setFrmLoad]=useState("login");

    const handleOnChange=e=>{
        const{name,value}=e.target
        switch(name){
            case 'email':setEmail(value)
                break
            case 'password': setPassword(value);
                break;
            
                default:
                    break;
        }

    };

    const handleOnSubmit = e =>{
        e.preventDefault();
        if(!email || !password){
           return alert("Fill up all the details.")
        }

        //TODO  call api to submit the form



        
    };

    const formSwitcher = frmType =>{
        setFrmLoad(frmType);
    }

    return(
        <div className="entry-page bg-info">
            <div className="jumbotron form-box">
                {frmLoad === 'login' && (<LoginForm handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email}
                pass={password}/>)}
                
                {frmLoad === 'rest' && (<ResetPassword handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email}/>)}

            </div>
        </div>
    )
} 