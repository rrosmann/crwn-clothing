import './App.css';
import './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
      </Switch>
    </div>
  );
}

export default App;
