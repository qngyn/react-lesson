import './App.css';
import Menu from "./Menu/index"
function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
  return (
    <div className="App">
      <Menu >
          <Menu.Button>Sports</Menu.Button>
          <Menu.Dropdown>
            {sports.map(sport => 
              <Menu.Item key={sport}>{sport}</Menu.Item>
              )}
          </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default App;
