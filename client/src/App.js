import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import RecipeBuilder from './components/RecipeBuilder';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <Router>
        <Route exact path={["/"]}>
        <LoginForm/>
        </Route>
        <Route exact path={["/Register"]}>
          <RegistrationForm/>
        </Route>
        <Route exact path={["/BuildRecipe"]}>
          <RecipeBuilder/>
        </Route>
      </Router>
      

    </div>
  );
}

export default App;
