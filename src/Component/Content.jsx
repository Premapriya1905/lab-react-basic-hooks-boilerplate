import React,{useContext,useEffect,useState} from "react";
import { MyContext } from "./Context";

function Content(){

    let [count,setCount]=useState(0);
    let [displayContent,setDisplayContent]=useState(true);
    let {darkTheme,setDarkTheme}=useContext(MyContext);

    function changeTheme(){
        setDarkTheme(!darkTheme)
    }
    function changeVisibility(){
        alert("Content button changed")
        setDisplayContent(!displayContent)
    }

    function changeCount(){
        setCount(count+1)
    }

    useEffect(()=>{
        return (
            console.log("changed")
        )
    },[displayContent])

    return (
        <>
            <div className="container">
                <button id="toggle" onClick={changeTheme}>Toggle</button>
            <div id="div" style={{
                backgroundColor: darkTheme? "black" : "grey",
                color:darkTheme? "white" : "black"
            }}>
                <p id="text" style={{
                    display: displayContent ? "none":"block"
                }}>He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obivious to anyone who walked into <br/> 
                the room there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door.<br />
                He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was about to discover him, but they <br />
                never did.</p>

                    <div id="parent">
                    <button id="content-btn" onClick={changeVisibility}>Content</button>
                    </div>
                    <div id="parent">
                    <h3 id="count">{count}</h3>
                    </div>
                    <div id="parent">
                    <button id="like-btn" onClick={changeCount}>Like</button>
                    </div>
            </div>
            </div>
        </>
    )
}

export default Content;