import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navcomp from './Components/Navcomp';
import Photos from './Components/Photos';
import About from './Components/About';
import Contact from './Components/Contact';
import SignlePhoto from './Components/SignlePhoto';
const App = () => {
  return (
    <BrowserRouter>
      <Navcomp />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/photos/:id">
          <SignlePhoto />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
