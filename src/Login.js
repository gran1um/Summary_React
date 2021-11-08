import "./css/style.css";
import "./css/bootstrap.min.css";
import { createRef, Ref } from "react";
import React,  { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from './Admin'

export default function Login() {
   

    let Logref = createRef();
    let Passref = createRef();
    let [out, setOut] = useState(0);

    function input(){
        if (Logref.current.value=='Vladilena' & Passref.current.value == '215506'){
        
            setOut(1);
            
    }
    else {
        setOut(0)
    }
    }
    
    
  return (
     
    <>
         <form action="/login" method="post">
        <div className="login-panel">
          <label>Логин</label>
          <input
            type="text"
            className="form-control"
            placeholder="Введите логин"
            name="login"
            id="login"
            ref= {Logref}
          />
          <label>Пароль</label>
          <input
            type="password"
            className="form-control"
            style = {{marginBottom: '10px'}}
            placeholder="Введите пароль"
            name="password"
            id="password"
            ref= {Passref}
            onChange={input}
          />
          {/* <button  type="button" onClick={input}>123</button> */}
            <Link to={{ pathname: "/admin", state:{p1 : out}}} >
            <button type="button" className="btn btn-outline-dark" >Войти
            </button>
            </Link>
            
        </div>
      </form>
     
    </>
  );
}
