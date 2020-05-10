import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddAndList from './../components/main/AddAndList';
import About from './../components/main/About';
import WelcomePage from './../components/main/WelcomePage';
import Err from './../components/main/Err';
import Edit from './../components/main/Edit';

import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
    return (
        <React.Fragment>
            <Header />
                <main className="container bg-light flex-fill">
                    <Switch>
                        <Route exact path="/">
                            <WelcomePage />
                        </Route>
                        
                        <Route exact path="/tasks">
                            <AddAndList />
                        </Route>
                    
                        <Route exact path="/about">
                            <About />
                        </Route>
    
                        <Route exact path="/edit/:id">
                            <Edit />
                        </Route>
    
                        <Route path="*">
                            <Err />
                        </Route>
                    </Switch>
                </main>
            <Footer />
        </React.Fragment>
    )
}

export default App;