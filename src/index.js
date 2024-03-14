import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
)



// ------------------------------------------- Props and array with object display  ----------------------------------------
// ReactDOM.render(
//   <>
//      {Data.map((val) => {
//         return(
//           <Card myImg={val.myImg} 
//                 link={val.link} 
//                 name = {val.name}
//                 code = {val.code}
//                 compnyName = {val.compnyName}
//           />
//         )
//       })}      
//   </>
//   ,document.getElementById('root')
// )



// ------------------------------------------- Create Componets using App Method and Date wise show msg ----------------------------------------
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )



// ------------------------------------------- Create Componets using App Method ----------------------------------------
// ReactDOM.render(
  
//   <App />
//   ,document.getElementById('root')
// )




// ------------------------------------------- Date wise show msg ----------------------------------------
// let curDate = new Date(2023,5,5,20);
// curDate = curDate.getHours();
// let msg = '';
// let stylecss = {
//   color : 'green'
// }

// if(curDate >= 1 && curDate < 12 ){
//   msg = "Good Morning";
//   stylecss.color = 'green';
// }else if(curDate >= 12 && curDate < 19){
//   msg = "Good Afternoon";
//   stylecss.color = 'orange';
// }else{
//   msg = "Good Night";
//   stylecss.color = 'black';
// }

// ReactDOM.render(
//   <>
//     <div>
//       <h1>Hello Sir, <span style={stylecss}>{msg}</span></h1>
//     </div>
//   </>,
//   document.getElementById('root')
// )
