import './App.css'
import Navbar from './components/Navbar.jsx'
import Info from './components/Info'
import Card from './components/Card'
import '@fontsource/poppins';
import HostData from './data/HostData'
function App() {
  const hostData = HostData.map (data => {
    return <Card 
          key = {data.id}
          {...data}
          />
  })

  console.log(hostData)
  return (
    <div >
        <Navbar />
        <Info />
      <section className = "cards-list"> 
        {hostData}
      </section>
    </div>

  )
}

export default App

