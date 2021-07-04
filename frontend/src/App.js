import './App.css'
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import Popup from './components/Popup'
import Notifications from './components/Notifications'

function App() {
  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />
        <Word />
        <Popup />
        <Notifications />
      </div>
    </>
  )
}

export default App
