import './App.css';
import { BrowserRouter as Router,Route,Link ,Switch} from "react-router-dom";
import Employement from './components/Pages/Employement';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={Employement}/>
      </Switch>
    </Router>
  
    
    </div>
  );
}

export default App;
