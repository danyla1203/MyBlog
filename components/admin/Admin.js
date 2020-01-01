import React, { useState } from 'react'

import Login from "../Login";

function Admin() {
    const [isLogin, setState] = useState(false);

    let check = (name, pass) => {
        let url = `/admin/check?name=${ name }&password=${ pass }`;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);  
        xhr.send();

        xhr.onload = () => {
            if(xhr.response == "{}") {
                setState(false)
            } else {
                setState(true);
            }
        }
    }
    
    if( isLogin ) {
        //return Router component
        return (
            
            <div id="admin_panel">
                admin
            </div>
        )
    } 
    
    return (
        <Login check={ check }/>
    )
}

export default Admin;