import React from 'react';
import { Home, Recipes, Advices, Shop, Login, SignUp, About, Partners, Contact, Privacy, Error } from './pages';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* Navbar Routes */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/advices">
          <Advices />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>

        {/* Footer Routes */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/partners">
          <Partners />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>

        {/* Error Route */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;