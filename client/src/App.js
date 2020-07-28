import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PhrasesPage from './components/PhrasesPage';
import NounsPage from './components/NounsPage';
import AdjectivesPage from './components/AdjectivesPage';
import VerbsPage from './components/VerbsPage';

function App() {

    return (
        <BrowserRouter>
          <header>header</header>
          <main>
              <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/phrases/:id' exact component={PhrasesPage} />
                  <Route path='/nouns/:id' exact component={NounsPage} />
                  <Route path='/verbs/:id' exact component={VerbsPage} />
                  <Route path='/adjectives/:id' exact component={AdjectivesPage} />
                  <Route path='/' render={() => <div>404 - File not found.</div>} />
              </Switch>
          </main>
          <footer>footer</footer>
        </BrowserRouter>
    );
}

export default App;