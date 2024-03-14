import React from "react";
// import './index.css';

function Msg(){
    let curDate = new Date(2023,5,5,20);
    curDate = curDate.getHours();
    let msg = '';
    let stylecss = {
        color : 'green'
    }

    if(curDate >= 1 && curDate < 12 ){
        msg = "Good Morning";
        stylecss.color = 'green';
    }else if(curDate >= 12 && curDate < 19){
        msg = "Good Afternoon";
        stylecss.color = 'orange';
    }else{
        msg = "Good Night";
        stylecss.color = 'black';
    }

    return(
        <div>
            <h1>Hello Sir, <span style={stylecss}>{msg}</span></h1>
        </div>
    )
}

export default Msg;