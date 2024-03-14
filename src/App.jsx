import React, { useState } from 'react';
import ToDoList from './ToDoList';


const App = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    
    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");
    }

    
    const delteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className='main_div'>
                 <div className='center_div'>
                     <br />
                     <h1>ToDo List</h1>
                     <br />
                     <input type='text' placeholder="Add a Items" name="" onChange={itemEvent} value={inputList}/>
                     <button onClick={listOfItems}> + </button>

                     <ol>
                        {Items.map((itemval, index) => {
                            return <ToDoList key={index} id={index} text={itemval} onSelect={delteItems}/>
                        })}
                     </ol>
                 </div>
             </div>
        </>
    )
}


// const App = () => {

//     const [inputList, setInputList] = useState("");
//     const [Items, setItems] = useState([]);

//     const itemEvent = (event) => {
//         setInputList(event.target.value);
//     }

//     const listOfItems = () => {
//         setItems((oldItems) => {
//             return [...oldItems, inputList]
//         })
//         setInputList("");
//     }

//     return(
//         <>
//             <div className='main_div'>
//                 <div className='center_div'>
//                     <br />
//                     <h1>ToDo List</h1>
//                     <br />
//                     <input type='text' placeholder="Add a Items" name="" onChange={itemEvent} value={inputList}/>
//                     <button onClick={listOfItems}> + </button>

//                     <ol>
//                         {Items.map((itemval) => {
//                             return <li> {itemval} </li>;
//                         })}
//                     </ol>
//                 </div>
//             </div>
//         </>
//     )
// }

// const App = () => {
//     const [fullName, setFullName] = useState({
//         fname : "",
//         lname : "",
//         email : "",
//         phone : ""
//     });
    

//     const inputEvent = (event) => {
//         const value = event.target.value;
//         const name = event.target.name;

//         setFullName((preValue) => {
//             return {
//                 ...preValue,
//                 [name] : value
//             }

//             // if(name == 'fName'){
//             //     return{
//             //         fname : value,
//             //         lname : preValue.lname,
//             //         email : preValue.email,
//             //         phone : preValue.phone
//             //     }
//             // }else if(name == 'lName'){
//             //     return{
//             //         fname : preValue.fname,
//             //         lname : value,
//             //         email : preValue.email,
//             //         phone : preValue.phone
//             //     }
//             // }else if(name == 'email'){
//             //     return{
//             //         fname : preValue.fname,
//             //         lname : preValue.lname,
//             //         email : value,
//             //         phone : preValue.phone
//             //     }
//             // }else if(name == 'phone'){
//             //     return {
//             //         fname : preValue.fname,
//             //         lname : preValue.lname,
//             //         email : preValue.email,
//             //         phone : value
//             //     }
//             // }
//         })


//     }
//     const onSubmit = (event) => {
//         event.preventDefault();
//     }

//     return (
//         <>
//             <div>
//                 <h1>Hello, {fullName.fname} {fullName.lname}</h1>
//                 <h3>{fullName.email}</h3>
//                 <br />
//                 <h3>{fullName.phone}</h3>
//                 <form onSubmit={onSubmit}>
//                     <input type="text" placeholder='Enter Your Name' name='fname' onChange={inputEvent} value={fullName.fname}/>
//                     <br />
//                     <input type="text" placeholder='Enter Your Last Name' name='lname' onChange={inputEvent} value={fullName.lname}/>
//                     <br />
//                     <input type="text" placeholder='Enter Your Email' name='email' onChange={inputEvent} value={fullName.email}/>
//                     <br />
//                     <input type="number" placeholder='Enter Your Phone Number' name='phone' onChange={inputEvent} value={fullName.phone}/>
//                     <br />
//                     <button type="submit">Click Me</button>
//                 </form>
//             </div>
//         </>
//     )
// }



// ---------------------------------- hooks with event use (click and double click)-----------------------
// const App = () => {
//     const purple = "#8e44ad";
//     const [bg, setBg] = useState(purple);
//     const [btName, setBtName] = useState("click me");
//     const updateColor = () => {
//         let newBg = "#34495e";
//         setBg(newBg);
//         setBtName("Ouch!!")
//     }

//     const bgback = () => {
//         setBg(purple);
//         setBtName("Ayyo !!")
//     }
//     return (
//         <>
//             <div style={{ backgroundColor : bg}}>
//                 <button onClick={updateColor} onDoubleClick={bgback}> {btName} </button>
//             </div>
//         </>
//     )
// }


// -------------------- time update for second wise ---------------------
// const App = () => {
//     let curDate = new Date().toLocaleTimeString();
//     let [refTime, setRefTime] = useState(curDate);
//     const getTime = () => {
//         curDate = new Date().toLocaleTimeString();
//         setRefTime(curDate);
//     }
//     setInterval(getTime,1000);
//     return (
//         <>
//             <h1>{refTime}</h1>
//             {/* <button onClick={getTime}>GET TIME</button> */}
//         </>
//     )
// }



// ------------------------ Number incress and decrees with hooks -------------------
// const App = () => {
//     const state = useState();
//     let [count, setCount] = useState(0);

//     const IncNum = () => {
//         setCount(++count);
//         // console.log(state)
//     }
//     const DecNum = () => {
//         setCount(--count);
//     }

//     return(
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNum}>Increes Number</button>
//             <button onClick={DecNum}>Decrees Number</button>
//         </>
//     )
// }

export default App;