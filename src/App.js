
import './App.css';
import { MemeProvider } from './Context/memeContext';
import MemeMaker from './Components/memeMaker';


function App() {
  
  return (
  <MemeProvider>
    <MemeMaker/>
  </MemeProvider>
  )  
}

export default App;


