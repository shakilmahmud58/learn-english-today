import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import SignUp from './components/SignUp';
import NotFound from './components/404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route path="/" exact >
            <Home></Home>
          </Route>
          <Route path="/home" exact >
            <Home></Home>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/services">
            <Service></Service>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*" exact >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
        <Footer></Footer>
    </div>
  );
}

export default App;
