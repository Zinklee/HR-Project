import './App.css';
import { BrowserRouter as Router,Route,Link ,Switch} from "react-router-dom";
import Employement from './components/Pages/Employement';
import DashBoard from "./components/Pages/DashBoard";
import LoginPage from './components/Pages/LoginPage'
import { useEffect } from 'react';
import Leave from './components/Pages/Leave';
import EmployeeStatus from './components/Pages/EmployeeStatus';
import History from './components/Pages/History'
import RequestLeave from './components/Pages/RequestLeave';
import UserDashBoard from './components/Pages/UserDashBoard'


function App() {
 
  return (
    <div className="App">
    <Router>
      <Switch>
       
        <Route exact path='/' component={Employement}/>
        <Route exact path='/DashBoard' component={DashBoard}/>
        <Route exact path='/LoginPage' component={LoginPage}/>
        <Route exact path='/Leave' component={Leave}/>
        <Route exact path='/EmployeeStatus' component={EmployeeStatus}/>
        <Route exact path='/History' component={History}/>
        <Route exact path='/RequestLeave' component={RequestLeave}/>
        {/* <Route exact path='/EmployeeDashBoard' component={EmployeeDashBoard}/> */}
        <Route exact path='/UserDashBoard' component={UserDashBoard}/>
      </Switch>
    </Router>
  {/* <Employement/> */}
  {/* <DashBoard/> */}
  {/* <LoginPage/> */}
  {/* <Leave/> */}
  {/* <EmployeeStatus/> */}
  {/* <History/> */}
    
    </div>
  );
}

export default App;
