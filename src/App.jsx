import Navbar from './components/Navbar'
import Card from './components/Card'
import cardData from './assets/data'
import './App.css'

function App() {
  const cardElements = cardData.map(function (e){
    return (
      <Card 
        key={e.id} 
        {...e}
      />
    )
  })

  return (
    <>
    <Navbar />
    <main className="cards">
      {cardElements}
    </main>
    </>
  )
}

export default App
