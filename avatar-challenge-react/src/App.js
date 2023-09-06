import './App.css';
import Avatar from './Avatar';


function App() {
  return (
    <div className="App">
      <Avatar src="../images/bob.jpg" alt="Bob Ziroll" />
      <hr/>
      <Avatar>BZ</Avatar>
      <hr/>
      <Avatar />
    </div>
  );
}

export default App;
