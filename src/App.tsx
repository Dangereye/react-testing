import './App.css';

// Components
import Application from './components/application/Application';
import Skills from './components/skills/Skills';

// Data
import { skills } from './data/skills';

function App() {
  return (
    <div className='App'>
      {/* <Application /> */}
      <Skills skills={skills} />
    </div>
  );
}

export default App;
