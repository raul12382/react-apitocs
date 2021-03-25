import React from 'react';
import Form from './components/form';
import Api_Facial from "./apiFacil/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "antd"
import 'antd/dist/antd.css'
//import Session from "./session/session";
//mport Autocapture from './AutoCaptura/autocapturecamera';

import { 
  BrowserRouter as Router, Route,
} from "react-router-dom";


function App(props) {


  return (
    <Form/>
  )
}

export default App;
