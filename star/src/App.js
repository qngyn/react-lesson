import React from 'react';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Toggle from "./components/Toggle/index"

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
      <br/>
      <br/>
      <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
    </>
  );
}

export default App;
/*

<Toggle.On>
            <div className="box filled"></div>
          </Toggle.On>
          <Toggle.Off>
            <div className="box"></div>
          </Toggle.Off>
*/
