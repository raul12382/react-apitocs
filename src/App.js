import React from 'react';
import styles from './App.css';
import Form from './components/form';
import Api_Facial from "./apiFacil/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { DatePicker } from "antd"
import 'antd/dist/antd.css'
import Select from '../src/components/doom';
//import Session from "./session/session";
//mport Autocapture from './AutoCaptura/autocapturecamera';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";

function App() {
 
  return (
  /*  <Router>
    <Api_Facial/>
    <Route path="/Form" exact component={Form}/>
    </Router> */
     <Router>
       <Api_Facial/>
      <Route path="/Form" exact component={Form}/>
    </Router> 

  );
}

export default App;
