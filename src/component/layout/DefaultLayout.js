import React from "react";

import "../../App.css";
import {Header} from './partial/Header.comp';
import {Footer} from './partial/Footer.com';

export const DefaultLayout=({children})=>{
    return(
        <div>
            <div className="default-layout">
            <div className="header">
                <Header/>
            </div>
            <div className="main">
                {children}
            </div>
            <div className="footer">
                <Footer/>
            </div>
            </div>
        </div>
    )
}