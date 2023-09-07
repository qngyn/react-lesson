import React from 'react';
import Menu from "./components/Menu/index"
import Star from "./components/Star"


function App() {
  const menu = ["Home", "About", "Contact", "Blog"]

  return (

    <>
      <br/>
      <Star/>
      <br />
      <Menu onOpen={() => console.log("Menu toggled")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          {menu.map(item => 
                <Menu.Item key={item}>{item}</Menu.Item>
          )}
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;
