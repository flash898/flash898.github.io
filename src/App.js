import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <Route render={({location}) => (
        <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={3000}
          classNames="fade"
        >
            <Switch location={location}>
              <Route exact path="/" component={ MainPage } />
              <Route path="/about" component={ About } />
              <Route path="/projects" component={ Work } />
              <Route path="/contact" component={ Contact } />
            </Switch>
        </CSSTransition>
      </TransitionGroup>
      )}/>
      <Footer />
    </div>
  );
}

export default App;
