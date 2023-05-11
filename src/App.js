import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/views/home/Home';
import Project from './components/views/project/Project';
import Society from './components/views/society/Society';
import Registration from './components/views/registration/Registration';
import Donate from './components/views/donate/Donate';
import About from './components/views/about/About';

// eslint-disable-next-line react/prefer-stateless-function

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/project" element={<Project />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/society" element={<Society />} />
    </Routes>
  </div>
);

export default App;
