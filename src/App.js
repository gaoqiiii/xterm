import './App.css';
import '../node_modules/xterm/css/xterm.css'
import Xterm from './Xterm'
function App() {
  const hanldeInput = data => {
    console.log(data)
  }

  return (
    <div className="App">
      <Xterm
        onInput={hanldeInput}
        value="Hello world"
      />
    </div>
  );
}

export default App;
