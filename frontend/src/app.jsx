import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch ,withRouter } from 'react-router-dom'; 
import Header from './components/header';
import Home from './components/home';
import UserPage from './components/userPage';

class App extends Component {
     render() { 
        return ( 

            <div>
            <Header/>
            <BrowserRouter>
            <Switch>
            <Route path='/' exact component={withRouter(Home)} />
            <Route path='/:user' component={UserPage} />
            </Switch>
            </BrowserRouter>
            </div> 
          
        );
    }
}
 
export default App;