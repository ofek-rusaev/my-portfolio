import React from 'react';
import { createBrowserHistory } from 'history';
// import { Router, Route, Switch } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';

import Main from './pages/Main';

// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

const history = createBrowserHistory();

function App() {
  return (

    <Router history={history}>
      <div className="App">
        {/* <Switch> */}
        <Route path="/" component={Main} />
        {/* <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} /> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
