import React from 'react'
export default function MessageBox(props){
    return(
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}{/* 
            in home screen.js whatever childern we passed on the message box it will display here
            <MessageBox variant="danger">{error}</MessageBox> */}
        </div>
    );
}