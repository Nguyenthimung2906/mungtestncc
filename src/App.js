import { useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import './components/grid.css'
function App() {

  // useEffect(() => {
  //   window.open('https://chat.openai.com/')
  // }, [])

  const a = {
    1: 4, 2: 5
  };
  console.log(Object.keys(a), Object.values(a));

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
