import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import RecipeBuilder from './components/RecipeBuilder';
import RecipeList from './components/RecipeList';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <Router>
        <Route exact path={["/"]}>
        <LoginForm/>
        </Route>
        <Route path="/signup">
          <RegistrationForm/>
        </Route>
        <Route path="/recipes">
          <RecipeList/>
        </Route>
        <Route path="/createRecipe">
          <RecipeBuilder/>
        </Route>
      </Router>
      

    </div>
  );
}

export default App;
