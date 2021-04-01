import './App.scss';
import Content from './components/Content.jsx'
import Landing from './components/Landing.jsx'
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null)

  const renderMain = () => user ? <Content /> : <Landing />

  return (
    <div className="App">
      {renderMain()}
    </div>
  );
}

export default App;
