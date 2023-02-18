import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

 import { Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import { Provider } from "react-redux";
import {store} from "./store";

import Doctor from "./components/Doctor";
import Navbar from "./components/Navbar";
import { Login } from "./components/auth/login";




export default class App extends Component{

  /* Which function does react call : render() */
  render(){  /* render must return something(JSX) */
    return(
        <div>
          <Provider store={store}>
          
          <Navbar/>
        
            <Routes>
            <Route path="/" element={ <Login />} /> 
            {/* <Route path="/" element={ <Arry />} />  */}
            {/* <Route path="/" element={ <TodoRedux />} /> 
            <Route path="/posts" element={ <Post />} />  */}
            {/* <Route path="/employee" element={ <Emp />} />  */}
            <Route path="/doctor" element={ <Doctor />} /> 
            {/* <Route path="/sign-up" element={ <SignUp />} /> 
            <Route path="/users" element={ <User />} />  */}
            {/* <Route path="*" element={ <PageNotFound />} /> */}
          </Routes>
            
           
          </Provider>
        </div>
    );
  }
}