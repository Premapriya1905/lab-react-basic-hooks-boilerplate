import "./App.css"
import React,{useEffect,useState} from "react";
import Context from './Component/Context'
import Content from './Component/Content'


function App(){
  return (
    <>
    <Context>
      <Content />
    </Context>
    </>
  )
}

export default App