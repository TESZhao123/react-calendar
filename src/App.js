import React from 'react'
import{HashRouter,Route} from"react-router-dom";
import Home from"./Home";
import schedule from "./schedule"
import{createSchedule} from"./redux/module/bucket"
import Detail from './Detail';

function App() {
  return (
   <HashRouter>
    <Route exact path="/" component={Home}/>
    <Route path="/schedule" component={schedule}/>
    <Route path="/Detail" component={Detail}/>
    
  </HashRouter>
  );
}
export default App;
